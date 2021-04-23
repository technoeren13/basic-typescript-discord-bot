"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSubCategories = exports.CommandCategories = void 0;
var CommandCategories;
(function (CommandCategories) {
    CommandCategories[CommandCategories["GUILD"] = 0] = "GUILD";
    CommandCategories[CommandCategories["CHANNEL"] = 1] = "CHANNEL";
    CommandCategories[CommandCategories["GAME"] = 2] = "GAME";
    CommandCategories[CommandCategories["USER"] = 3] = "USER";
    CommandCategories[CommandCategories["UTILITY"] = 4] = "UTILITY";
})(CommandCategories = exports.CommandCategories || (exports.CommandCategories = {}));
var CommandSubCategories;
(function (CommandSubCategories) {
    CommandSubCategories[CommandSubCategories["GUARD"] = 0] = "GUARD";
    CommandSubCategories[CommandSubCategories["REGISTER"] = 1] = "REGISTER";
    CommandSubCategories[CommandSubCategories["MODERATION"] = 2] = "MODERATION";
})(CommandSubCategories = exports.CommandSubCategories || (exports.CommandSubCategories = {}));
