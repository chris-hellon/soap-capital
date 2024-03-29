using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.Options;
using Stripe;
using Stripe.Checkout;

namespace SoapCapital.Application.Stripe.Queries;

public class GetStripePaymentStatusRequest : IRequest<Session>
{
    [Required]
    public string? StripeSessionId { get; set; }

    public GetStripePaymentStatusRequest(string? stripeSessionId)
    {
        StripeSessionId = stripeSessionId;
    }
}

internal class GetStripePaymentStatusHandler : IRequestHandler<GetStripePaymentStatusRequest, Session>
{
    private readonly IStripeClient _stripeClient;
    
    public GetStripePaymentStatusHandler(IOptions<StripeSettings> stripeSettings)
    {
        _stripeClient = new StripeClient(stripeSettings.Value.ApiSecretKey);
    }
    
    public async Task<Session> Handle(GetStripePaymentStatusRequest request, CancellationToken cancellationToken)
    {
        var service = new SessionService(_stripeClient);

        return await service.GetAsync(request.StripeSessionId, cancellationToken: cancellationToken);
    }
}