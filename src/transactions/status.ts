import axios from "axios";
import chalk from "chalk";
import { ZKAPI_TESTNET } from "./constant";

interface ICheckStatusOptions {
    txAddress?: string;
}

export default async function listWallets({txAddress}: ICheckStatusOptions) {
    console.log(chalk.magentaBright(`Checking the status of transactions...`));
    try {
        // TODO: Waiting for api fix
        const response = await axios.get(`${ZKAPI_TESTNET}/transactions/${txAddress}/data`);
        console.table(response.data);
    } catch (exception) {
        console.log(chalk.red("Something went wrong while fetching the transaction history"));
    }
}