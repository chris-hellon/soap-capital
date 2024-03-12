using SoapCapital.Application.Persistence.Repository;

namespace SoapCapital.Application.Catalog.Videos.Commands;

public class DeleteVideoRequest : IRequest
{
    public int Id { get; set; }

    public DeleteVideoRequest(int id)
    {
        Id = id;
    }
}

internal class DeleteVideoRequestHandler : IRequestHandler<DeleteVideoRequest>
{
    protected IDapperRepository _repository;

    public DeleteVideoRequestHandler(IDapperRepository repository)
    {
        _repository = repository;
    }

    public async Task Handle(DeleteVideoRequest request, CancellationToken cancellationToken)
    {
        await _repository.DeleteSingleAsync("DeleteVideo", request);
    }
}