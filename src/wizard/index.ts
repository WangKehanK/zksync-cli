//@ts-ignore
import chalk from 'chalk';
import inquirer from "inquirer";
import { contractTypeQuestion, erc1155questions, erc20questions, erc721questions } from './questions';
import { erc20, erc721, erc1155 } from '@openzeppelin/wizard/';
import fs from 'fs/promises'; 


function saveFile(path : string, contractName : string, contract : string){
    const filepath = path + contractName;
    console.log(filepath);
    //@ts-ignore
    try{
        fs.writeFile(filepath, contract); 
        console.log(chalk.green("The file was saved to " + filepath));
    }catch(err){
        console.log(chalk.red("Error saving file: " + err));
    }
}

function saveFilewithGivenPath(contractPath : string, contract : string){
    //@ts-ignore
    try{
        fs.writeFile(contractPath, contract); 
        console.log(chalk.green("The file was saved to " + contractPath));
    }catch(err){
        console.log(chalk.red("Error saving file: " + err));
    }
}

export default async function () {
    console.log(chalk.magentaBright("Using OpenZeppelin Wizard to create smart contract"));
    let contract;
    await inquirer.prompt(contractTypeQuestion).then(async (answers) => {
        // TODO: add more options
        switch (answers.contractType) {
            case "erc20":
                const answerERC20 = await inquirer.prompt(erc20questions);
                contract = erc20.print({
                    name: answerERC20.tokenName,
                    symbol: answerERC20.tokenSymbol
                });
                if(answerERC20.savePath != "") {
                    saveFilewithGivenPath(answerERC20.savePath, contract);
                    break;
                }
                saveFile(process.cwd(), `/${answerERC20.tokenName}.sol`, contract);
                break;
            case "erc721":
                const answerERC721 = await inquirer.prompt(erc721questions);
                contract = erc721.print({
                    name: answerERC721.tokenName,
                    symbol: answerERC721.tokenSymbol
                });
                if(answerERC721.savePath != "") {
                    saveFilewithGivenPath(answerERC721.savePath, contract);
                    break;
                }
                saveFile(process.cwd(), `/${answerERC721.tokenName}.sol`, contract);
                break;
            case "erc1155":
                const answerERC1155 = await inquirer.prompt(erc1155questions);
                contract = erc1155.print({
                    name: answerERC1155.tokenName,
                    uri: "ipfs://example.com/api/item/{id}"
                });
                if(answerERC1155.savePath != "") {
                    saveFilewithGivenPath(answerERC1155.savePath, contract);
                    break;
                }
                saveFile(process.cwd(), `/${answerERC1155.tokenName}.sol`, contract);
                break;
        }
    });
}



