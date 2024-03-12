using MediatR;
using SoapCapital.Application.Catalog.Interfaces;
using SoapCapital.Application.Catalog.Packages.Commands;
using SoapCapital.Application.Catalog.Packages.Dto;
using SoapCapital.Application.Catalog.Packages.Queries;

namespace SoapCapital.Infrastructure.Catalog.Services;

public class PackagesService : IPackagesService
{
    private readonly ISender _mediator;

    public PackagesService(ISender mediator)
    {
        _mediator = mediator;
    }

    public Task<IEnumerable<PackageDto>> GetPackages(GetPackagesRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<PackageDto?> GetPackage(int id)
    {
        return _mediator.Send(new GetPackageRequest(id));
    }
    
    public Task<int> CreatePackage(CreatePackageRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task<int> UpdatePackage(UpdatePackageRequest request)
    {
        return _mediator.Send(request);
    }
    
    public Task DeletePackage(int id)
    { 
        return _mediator.Send(new DeletePackageRequest(id));
    }
}