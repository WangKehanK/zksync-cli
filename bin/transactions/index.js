"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_util_1 = require("node:util");
const list_1 = __importDefault(require("./list"));
var TransactionsCommands;
(function (TransactionsCommands) {
    // List transactions of 
    TransactionsCommands["List"] = "ls";
})(TransactionsCommands || (TransactionsCommands = {}));
function wallet({ option, args }) {
    switch (option) {
        case TransactionsCommands.List:
            const listArgs = (0, node_util_1.parseArgs)({
                args,
                options: {
                    publicKey: {
                        type: 'string',
                        short: 'p',
                    },
                    limit: {
                        type: 'string',
                        short: 'l',
                    }
                }
            });
            (0, list_1.default)(listArgs.values);
            break;
    }
}
exports.default = wallet;
