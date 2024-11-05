using MediatR;
using Microsoft.Extensions.DependencyInjection;
using SoapCapital.Application.Factories;

namespace SoapCapital.Infrastructure.Factories;

public class MediatorFactory : IMediatorFactory
{
    private readonly IServiceProvider _serviceProvider;

    public MediatorFactory(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public IMediator CreateMediator()
    {
        // Create a new scope for each mediator instance
        var scope = _serviceProvider.CreateScope();
        return scope.ServiceProvider.GetRequiredService<IMediator>();
    }
}