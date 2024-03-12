using SoapCapital.Application.Catalog.Packages.Commands;
using SoapCapital.Application.Catalog.Packages.Dto;
using SoapCapital.Application.Catalog.Packages.Queries;
using SoapCapital.Application.Common.Interfaces;

namespace SoapCapital.Application.Catalog.Interfaces;

public interface IPackagesService : ITransientService
{
    Task<IEnumerable<PackageDto>> GetPackages(GetPackagesRequest request);
    
    Task<PackageDto?> GetPackage(int id);

    Task<int> CreatePackage(CreatePackageRequest request);

    Task<int> UpdatePackage(UpdatePackageRequest request);

    Task DeletePackage(int id);
}