import { parseArgs } from 'node:util';
import listTransactions from './list';

enum TransactionsCommands {
    // List transactions of 
    List = 'ls',
    Status = 'status'
}

interface ITransactionsOptions {
    option: TransactionsCommands;
    args: string[];
}

export default function wallet({option, args}: ITransactionsOptions) {
    switch (option) {
        case TransactionsCommands.List:
            const listArgs = parseArgs({
                args,
                options: {
                    publicKey: {
                        type: 'string',
                        short: 'p',
                    },
                    limit : {
                        type: 'string',
                        short: 'l',
                    }
                }
            })
            listTransactions(listArgs.values);
            break;
        case TransactionsCommands.Status:
            break;
    }
}