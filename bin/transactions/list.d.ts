interface IListTransactionsOptions {
    publicKey?: string;
    limit?: string;
}
export default function listWallets({ publicKey, limit }: IListTransactionsOptions): Promise<void>;
export {};
