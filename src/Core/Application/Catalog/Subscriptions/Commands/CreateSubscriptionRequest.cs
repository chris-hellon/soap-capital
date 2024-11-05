using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Packages.Queries;
using SoapCapital.Application.Catalog.Subscriptions.Queries;
using SoapCapital.Application.Common.Exceptions;
using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Subscriptions.Commands;

public class CreateSubscriptionRequest : IRequest<int?>
{
    public string? UserId { get; set; }
    public int PackageId { get; set; }
    public int OrderId { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public int? Id { get; set; }

    public CreateSubscriptionRequest(string? userId, int packageId, int orderId)
    {
        UserId = userId;
        PackageId = packageId;
        OrderId = orderId;
    }
}

internal class CreateSubscriptionRequestHandler : IRequestHandler<CreateSubscriptionRequest, int?>
{
    private readonly IDapperRepository<int> _repository;
    private readonly IPackagesService _packagesService;
    private readonly ISubscriptionsService _subscriptionsService;
    
    public CreateSubscriptionRequestHandler(
        IDapperRepository<int> repository, 
        IPackagesService packagesService,
        ISubscriptionsService subscriptionsService) => (_repository, _packagesService, _subscriptionsService) = (repository, packagesService, subscriptionsService);
    
    public async Task<int?> Handle(CreateSubscriptionRequest request, CancellationToken cancellationToken)
    {
        var package = await _packagesService.GetPackage(request.PackageId) ?? throw new NotFoundException("No package found");

        request.StartDate = DateTime.Now;
        request.EndDate = DateTime.Now;

        if (!request.Id.HasValue)
        {
            var existingSubscription = await _subscriptionsService.GetUserSubscription(new GetUserSubscriptionRequest(request.UserId));
        
            if (existingSubscription != null)
                request.StartDate = existingSubscription.EndDate;
        }
        
        request.EndDate = package.DurationType switch
        {
            "Day" => request.StartDate.Value.AddDays(package.Duration),
            "Month" => request.StartDate.Value.AddMonths(package.Duration),
            "Year" => request.StartDate.Value.AddYears(package.Duration),
            _ => request.EndDate
        };

        return await _repository.CreateSingleAsync("CreateSubscription", request);
    }
}