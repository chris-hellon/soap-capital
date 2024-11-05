using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Portfolios.Commands;

public class DeletePortfolioRequest : IRequest
{
    public int Id { get; set; }

    public DeletePortfolioRequest(int id)
    {
        Id = id;
    }
}

internal class DeletePortfolioRequestHandler : IRequestHandler<DeletePortfolioRequest>
{
    private readonly IDapperRepository _repository;

    public DeletePortfolioRequestHandler(IDapperRepository repository)
    {
        _repository = repository;
    }

    public async Task Handle(DeletePortfolioRequest request, CancellationToken cancellationToken)
    {
        await _repository.DeleteSingleAsync("DeletePortfolio", request);
    }
}