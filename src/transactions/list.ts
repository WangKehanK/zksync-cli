import axios from "axios";
import chalk from "chalk";
import { ZKAPI_TESTNET } from "./constant";

interface IListTransactionsOptions {
    publicKey?: string;
    limit?: string;
}

export default async function listWallets({publicKey, limit}: IListTransactionsOptions) {
    console.log(chalk.magentaBright("Listing transactions..."));
    try {
        const response = await axios.get(`${ZKAPI_TESTNET}/accounts/${publicKey}/transactions?from=latest&limit=${limit}&direction=older`);
        console.table(response.data);
    } catch (exception) {
        console.log(chalk.red("Something went wrong while fetching the transaction history"));
    }
}