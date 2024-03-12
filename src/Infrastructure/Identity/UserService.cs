using System.Diagnostics;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Orders.Commands;
using SoapCapital.Application.Catalog.Packages.Queries;
using SoapCapital.Application.Catalog.Subscriptions.Commands;
using SoapCapital.Application.Catalog.Subscriptions.Queries;
using SoapCapital.Application.Catalog.Users.Commands;
using SoapCapital.Application.Catalog.Users.Dto;
using SoapCapital.Application.Catalog.Users.Queries;
using SoapCapital.Application.Common.Exceptions;
using SoapCapital.Application.Identity;
using SoapCapital.Infrastructure.Persistence.Context;

namespace SoapCapital.Infrastructure.Identity;

public class UserService : IUserService
{
    private readonly IPasswordHasher<ApplicationUser> _passwordHasher;
    private readonly IDbContextFactory<ApplicationDbContext> _dbContextFactory;
    private readonly IPackagesService _packagesService;
    private readonly IOrdersService _ordersService;
    private readonly ISubscriptionsService _subscriptionsService;
    private readonly ISender _mediator;

    public UserService(IPasswordHasher<ApplicationUser> passwordHasher, IDbContextFactory<ApplicationDbContext> dbContextFactory, IPackagesService packagesService, IOrdersService ordersService, ISubscriptionsService subscriptionsService, ISender mediator)
    {
        _passwordHasher = passwordHasher;
        _dbContextFactory = dbContextFactory;
        _packagesService = packagesService;
        _ordersService = ordersService;
        _subscriptionsService = subscriptionsService;
        _mediator = mediator;
    }

    public Task<IEnumerable<UserDto>> GetUsers(GetUsersRequest request)
    {
        return _mediator.Send(request);
    }
    
    public async Task<string> CreateAsync(CreateUserRequest request)
    {
        var user = new ApplicationUser
        {
            Email = request.Email,
            UserName = request.UserName,
            SignUpDate = DateTime.Now,
            DiscordUsername = request.DiscordUserName ?? string.Empty,
            EmailConfirmed = true,
            NormalizedEmail = request.Email?.Normalize().ToUpper(),
            NormalizedUserName = request.UserName?.Normalize().ToUpper(),
            LockoutEnabled = true
        };
        
        var hashedPassword = _passwordHasher.HashPassword(user, request.Password!);
        user.PasswordHash = hashedPassword;

        var dbContext = await _dbContextFactory.CreateDbContextAsync();
        
        await dbContext.Users.AddAsync(user);
        
        if (!request.PackageId.HasValue) return string.Empty;
        
        var package = await _packagesService.GetPackage(request.PackageId.Value);

        if (package == null) return string.Empty;
        
        await dbContext.SaveChangesAsync();
                
        var orderId = await _ordersService.CreateOrder(new CreateOrderRequest(request.PackageId.Value, package.Price, user.Id, true));

        if (orderId > 0)
            await _subscriptionsService.CreateSubscription(new CreateSubscriptionRequest(user.Id, request.PackageId.Value, orderId));
        
        return user.Id;
    }
    
    public async Task UpdateAsync(UpdateUserRequest request)
    {
        var dbContext = await _dbContextFactory.CreateDbContextAsync();
        var user = await GetUserById(dbContext, request.Id!);

        _ = user ?? throw new NotFoundException("User Not Found.");

        user.Email = request.Email;
        user.UserName = request.UserName;
        user.NormalizedEmail = request.Email?.Normalize().ToUpper();
        user.NormalizedUserName = request.UserName?.Normalize().ToUpper();
        user.DiscordUsername = request.DiscordUserName ?? string.Empty;

        var userPackage = await _subscriptionsService.GetUserSubscription(new GetUserSubscriptionRequest(request.Id));

        if (request.PackageId != null && userPackage != null && userPackage.PackageId != request.PackageId.Value || userPackage == null)
        {
            Debug.Assert(request.PackageId != null, "request.PackageId != null");
            var package = await _packagesService.GetPackage(request.PackageId.Value);

            if (package != null)
            {
                var orderId = await _ordersService.CreateOrder(new CreateOrderRequest(request.PackageId.Value, package.Price, user.Id, true));

                if (orderId > 0)
                {
                    await _subscriptionsService.CreateSubscription(new CreateSubscriptionRequest(user.Id, request.PackageId.Value, orderId)
                    {
                        Id = userPackage?.Id
                    });
                }
            }
        }

        try
        {
            dbContext.Users.Update(user);

            await dbContext.SaveChangesAsync();
        }
        catch (Exception)
        {
            throw new InternalServerException("Update user failed");
        }
    }

    public async Task DeleteAsync(string userId)
    {
        var dbContext = await _dbContextFactory.CreateDbContextAsync();
        
        var user = await GetUserById(dbContext, userId);

        _ = user ?? throw new NotFoundException("User Not Found.");
        
        dbContext.Users.Remove(user);
        
        await dbContext.SaveChangesAsync();
    }
    
    private static async Task<ApplicationUser> GetUserById(ApplicationDbContext dbContext, string userId)
    {
        return await dbContext.Users.AsNoTracking().FirstAsync(x => x.Id == userId);
    }
}