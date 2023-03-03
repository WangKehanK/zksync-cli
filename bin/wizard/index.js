"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const questions_1 = require("./questions");
const wizard_1 = require("@openzeppelin/wizard/");
const promises_1 = __importDefault(require("fs/promises"));
function saveFile(path, contractName, contract) {
    const filepath = path + contractName;
    console.log(filepath);
    //@ts-ignore
    try {
        promises_1.default.writeFile(filepath, contract);
        console.log(chalk_1.default.green("The file was saved to " + filepath));
    }
    catch (err) {
        console.log(chalk_1.default.red("Error saving file: " + err));
    }
}
function saveFilewithGivenPath(contractPath, contract) {
    //@ts-ignore
    try {
        promises_1.default.writeFile(contractPath, contract);
        console.log(chalk_1.default.green("The file was saved to " + contractPath));
    }
    catch (err) {
        console.log(chalk_1.default.red("Error saving file: " + err));
    }
}
function default_1() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(chalk_1.default.magentaBright("Using OpenZeppelin Wizard to create smart contract"));
        let contract;
        yield inquirer_1.default.prompt(questions_1.contractTypeQuestion).then((answers) => __awaiter(this, void 0, void 0, function* () {
            // TODO: add more options
            switch (answers.contractType) {
                case "erc20":
                    const answerERC20 = yield inquirer_1.default.prompt(questions_1.erc20questions);
                    contract = wizard_1.erc20.print({
                        name: answerERC20.tokenName,
                        symbol: answerERC20.tokenSymbol
                    });
                    if (answerERC20.savePath != "") {
                        saveFilewithGivenPath(answerERC20.savePath, contract);
                        break;
                    }
                    saveFile(process.cwd(), `/${answerERC20.tokenName}.sol`, contract);
                    break;
                case "erc721":
                    const answerERC721 = yield inquirer_1.default.prompt(questions_1.erc721questions);
                    contract = wizard_1.erc721.print({
                        name: answerERC721.tokenName,
                        symbol: answerERC721.tokenSymbol
                    });
                    if (answerERC721.savePath != "") {
                        saveFilewithGivenPath(answerERC721.savePath, contract);
                        break;
                    }
                    saveFile(process.cwd(), `/${answerERC721.tokenName}.sol`, contract);
                    break;
                case "erc1155":
                    const answerERC1155 = yield inquirer_1.default.prompt(questions_1.erc1155questions);
                    contract = wizard_1.erc1155.print({
                        name: answerERC1155.tokenName,
                        uri: "ipfs://example.com/api/item/{id}"
                    });
                    if (answerERC1155.savePath != "") {
                        saveFilewithGivenPath(answerERC1155.savePath, contract);
                        break;
                    }
                    saveFile(process.cwd(), `/${answerERC1155.tokenName}.sol`, contract);
                    break;
            }
        }));
    });
}
exports.default = default_1;
