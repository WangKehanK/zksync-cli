"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erc1155questions = exports.erc721questions = exports.erc20questions = exports.contractTypeQuestion = void 0;
const contractTypeQuestion = [
    {
        message: "Which contract do you want to create (erc20, erc721, erc1155)?",
        name: "contractType",
        type: "list",
        choices: ["erc20", "erc721", "erc1155"],
        loop: true,
    },
];
exports.contractTypeQuestion = contractTypeQuestion;
const erc20questions = [
    {
        message: "Want to save the contract to path (default: current path): /path/to/contract.sol",
        name: "savePath",
        type: "input",
    },
    {
        message: "Token name:",
        name: "tokenName",
        type: "input",
    },
    {
        message: "Token symbol:",
        name: "tokenSymbol",
        type: "input",
    }
];
exports.erc20questions = erc20questions;
const erc721questions = [
    {
        message: "Want to save the contract to path (default: current path): /path/to/contract.sol",
        name: "savePath",
        type: "input",
    },
    {
        message: "Token name:",
        name: "tokenName",
        type: "input",
    },
    {
        message: "Token symbol:",
        name: "tokenSymbol",
        type: "input",
    }
];
exports.erc721questions = erc721questions;
const erc1155questions = [
    {
        message: "Want to save the contract to path (default: current path): /path/to/contract.sol",
        name: "savePath",
        type: "input",
    },
    {
        message: "Token name:",
        name: "tokenName",
        type: "input",
    },
    {
        message: "Token symbol:",
        name: "tokenSymbol",
        type: "input",
    }
];
exports.erc1155questions = erc1155questions;
