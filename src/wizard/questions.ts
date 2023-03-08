import { QuestionCollection } from "inquirer";


const contractTypeQuestion: QuestionCollection = [
    {
      message: "Which contract do you want to create (erc20, erc721, erc1155)?",
      name: "contractType",
      type: "list",
      choices: ["erc20", "erc721", "erc1155"],
      loop: true,
    },
  ];

const erc20questions: QuestionCollection = [
  {
    message: "Save the contract to path (default: current path): /path/to/contract.sol",
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
  },
  {
    message: "Burnable? (y/n)",
    name: "burnable",
    type: "input",
  }
];

const erc721questions: QuestionCollection = [
    {
      message: "Save the contract to path (default: current path): /path/to/contract.sol",
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

const erc1155questions: QuestionCollection = [
    {
      message: "Save the contract to path (default: current path): /path/to/contract.sol",
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

export {contractTypeQuestion, erc20questions, erc721questions, erc1155questions};