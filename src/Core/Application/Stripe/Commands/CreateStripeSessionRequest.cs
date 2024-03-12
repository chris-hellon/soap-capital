using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.Options;
using Stripe;
using Stripe.Checkout;

namespace SoapCapital.Application.Stripe.Commands;

public class CreateStripeSessionRequest : IRequest<Session>
{
    [Required]
    public string? StripePriceId { get; set; }
    
    [Required]
    public string? SuccessUrl { get; set; }
    
    [Required]
    public string? CancelUrl { get; set; }

    public CreateStripeSessionRequest(string? stripePriceId, string? successUrl, string? cancelUrl)
    {
        StripePriceId = stripePriceId;
        SuccessUrl = successUrl;
        CancelUrl = cancelUrl;
    }
}

internal class CreateStripeSessionRequestHandler : IRequestHandler<CreateStripeSessionRequest, Session>
{
    private readonly IStripeClient _stripeClient;
    
    public CreateStripeSessionRequestHandler(IOptions<StripeSettings> stripeSettings)
    {
        _stripeClient = new StripeClient(stripeSettings.Value.ApiSecretKey);
    }
    
    public async Task<Session> Handle(CreateStripeSessionRequest request, CancellationToken cancellationToken)
    {
        var options = new SessionCreateOptions
        {
            LineItems =
            [
                new SessionLineItemOptions
                {
                    Price = request.StripePriceId,
                    Quantity = 1,
                }

            ],
            Mode = "payment",
            SuccessUrl = request.SuccessUrl,
            CancelUrl = request.CancelUrl,
        };

        var service = new SessionService(_stripeClient);

        return await service.CreateAsync(options, cancellationToken: cancellationToken);
    }
}