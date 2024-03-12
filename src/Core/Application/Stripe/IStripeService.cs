using SoapCapital.Application.Common.Interfaces;
using SoapCapital.Application.Stripe.Commands;
using SoapCapital.Application.Stripe.Queries;
using Stripe.Checkout;

namespace SoapCapital.Application.Stripe;

public interface IStripeService : ITransientService
{
    Task<Session> CreateStripeSession(CreateStripeSessionRequest request);

    Task<Session> GetStripePaymentStatus(GetStripePaymentStatusRequest request);
}