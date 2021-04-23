"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../../types/enums");
var i18nManager_1 = require("../../managers/i18nManager");
var tr_json_1 = __importDefault(require("./translations/tr.json"));
var en_json_1 = __importDefault(require("./translations/en.json"));
var TestCommand = (function () {
    function TestCommand() {
        var _this = this;
        this.id = 'test';
        this.category = enums_1.CommandCategories.GUILD;
        this.subCategory = enums_1.CommandSubCategories.MODERATION;
        this.load = function () {
            i18nManager_1.loadCommandTranslations(_this.id, {
                en: en_json_1.default,
                tr: tr_json_1.default,
            });
        };
    }
    return TestCommand;
}());
exports.default = TestCommand;
