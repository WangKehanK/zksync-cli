declare enum TransactionsCommands {
    List = "ls"
}
interface ITransactionsOptions {
    option: TransactionsCommands;
    args: string[];
}
export default function wallet({ option, args }: ITransactionsOptions): void;
export {};
