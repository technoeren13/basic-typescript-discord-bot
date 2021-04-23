"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18next = exports.loadCommandTranslations = exports.supportedLngs = void 0;
var i18next_1 = __importDefault(require("i18next"));
exports.i18next = i18next_1.default;
exports.supportedLngs = ['en', 'tr'];
i18next_1.default.init({
    lng: 'en',
    supportedLngs: exports.supportedLngs,
    defaultNS: 'common',
    resources: {},
});
var loadCommandTranslations = function (id, jsons) {
    var e_1, _a;
    try {
        for (var supportedLngs_1 = __values(exports.supportedLngs), supportedLngs_1_1 = supportedLngs_1.next(); !supportedLngs_1_1.done; supportedLngs_1_1 = supportedLngs_1.next()) {
            var lng = supportedLngs_1_1.value;
            var json = jsons[lng];
            if (json) {
                i18next_1.default.addResourceBundle(lng, id, json);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (supportedLngs_1_1 && !supportedLngs_1_1.done && (_a = supportedLngs_1.return)) _a.call(supportedLngs_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
exports.loadCommandTranslations = loadCommandTranslations;
