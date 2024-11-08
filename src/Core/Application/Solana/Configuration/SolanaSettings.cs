namespace SoapCapital.Application.Solana.Configuration;

public class SolanaSettings
{
    public string? TyrelTokenMintPubKey { get; set; }
    public string? TyrelContractAddress { get; set; }
    public string? TyrelAccountOwnerToken { get; set; }
    public string? RpcUrl { get; set; }
    public string? WebsocketUrl { get; set; }
    public string? BackupRpcUrl { get; set; }
    public string? AuthKey { get; set; }
}