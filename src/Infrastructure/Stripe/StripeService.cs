using MediatR;
using SoapCapital.Application.Stripe;
using SoapCapital.Application.Stripe.Commands;
using SoapCapital.Application.Stripe.Queries;
using Stripe.Checkout;

namespace SoapCapital.Infrastructure.Stripe;

public class StripeService : IStripeService
{
    private readonly IMediator _mediator;

    public StripeService(IMediator mediator)
    {
        _mediator = mediator;
    }

    public async Task<Session> CreateStripeSession(CreateStripeSessionRequest request)
    {
        return await _mediator.Send(request);
    }

    public async Task<Session> GetStripePaymentStatus(GetStripePaymentStatusRequest request)
    {
        return await _mediator.Send(request);
    }
}
