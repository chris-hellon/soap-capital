using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Charts.Commands;

public class DeleteChartRequest : IRequest
{
    public int Id { get; set; }

    public DeleteChartRequest(int id)
    {
        Id = id;
    }
}

internal class DeleteChartRequestHandler : IRequestHandler<DeleteChartRequest>
{
    protected IDapperRepository _repository;

    public DeleteChartRequestHandler(IDapperRepository repository)
    {
        _repository = repository;
    }

    public async Task Handle(DeleteChartRequest request, CancellationToken cancellationToken)
    {
        await _repository.DeleteSingleAsync("DeleteChart", request);
    }
}