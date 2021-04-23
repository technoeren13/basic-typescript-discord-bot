"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindEvents = exports.loadCommands = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var i18nManager_1 = require("./i18nManager");
var loadCommands = function () { return __awaiter(void 0, void 0, void 0, function () {
    var languagesMap, commandIds, basePath, commandFolders, commandFolders_1, commandFolders_1_1, commandFolder, commandFile, rawCommandModule, commandModule, commandInstance, e_1_1, supportedLngs_1, supportedLngs_1_1, language, commandsMap, commandIds_1, commandIds_1_1, commandObj, aliasString, _a, _b, alias;
    var e_2, _c, e_3, _d, e_4, _e;
    var e_1, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                languagesMap = new Map([
                    [
                        'en',
                        new Map(),
                    ],
                    [
                        'tr',
                        new Map(),
                    ],
                ]);
                commandIds = [];
                basePath = path_1.default.join(__dirname, '..', 'commands');
                commandFolders = fs_1.default.readdirSync(basePath);
                _g.label = 1;
            case 1:
                _g.trys.push([1, 7, 8, 13]);
                commandFolders_1 = __asyncValues(commandFolders);
                _g.label = 2;
            case 2: return [4, commandFolders_1.next()];
            case 3:
                if (!(commandFolders_1_1 = _g.sent(), !commandFolders_1_1.done)) return [3, 6];
                commandFolder = commandFolders_1_1.value;
                commandFile = path_1.default.join(basePath, commandFolder, 'entry');
                return [4, Promise.resolve().then(function () { return __importStar(require(commandFile)); })];
            case 4:
                rawCommandModule = _g.sent();
                commandModule = rawCommandModule.default;
                commandInstance = new commandModule();
                commandInstance.load();
                commandIds.push({
                    id: commandInstance.id,
                    instance: commandInstance,
                });
                _g.label = 5;
            case 5: return [3, 2];
            case 6: return [3, 13];
            case 7:
                e_1_1 = _g.sent();
                e_1 = { error: e_1_1 };
                return [3, 13];
            case 8:
                _g.trys.push([8, , 11, 12]);
                if (!(commandFolders_1_1 && !commandFolders_1_1.done && (_f = commandFolders_1.return))) return [3, 10];
                return [4, _f.call(commandFolders_1)];
            case 9:
                _g.sent();
                _g.label = 10;
            case 10: return [3, 12];
            case 11:
                if (e_1) throw e_1.error;
                return [7];
            case 12: return [7];
            case 13:
                try {
                    for (supportedLngs_1 = __values(i18nManager_1.supportedLngs), supportedLngs_1_1 = supportedLngs_1.next(); !supportedLngs_1_1.done; supportedLngs_1_1 = supportedLngs_1.next()) {
                        language = supportedLngs_1_1.value;
                        i18nManager_1.i18next.changeLanguage(language);
                        commandsMap = languagesMap.get(language);
                        if (commandsMap) {
                            try {
                                for (commandIds_1 = (e_3 = void 0, __values(commandIds)), commandIds_1_1 = commandIds_1.next(); !commandIds_1_1.done; commandIds_1_1 = commandIds_1.next()) {
                                    commandObj = commandIds_1_1.value;
                                    aliasString = i18nManager_1.i18next.t(commandObj.id + ":aliases");
                                    try {
                                        for (_a = (e_4 = void 0, __values(aliasString.split(','))), _b = _a.next(); !_b.done; _b = _a.next()) {
                                            alias = _b.value;
                                            commandsMap.set(alias, commandObj.instance);
                                        }
                                    }
                                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                    finally {
                                        try {
                                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                    }
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (commandIds_1_1 && !commandIds_1_1.done && (_d = commandIds_1.return)) _d.call(commandIds_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (supportedLngs_1_1 && !supportedLngs_1_1.done && (_c = supportedLngs_1.return)) _c.call(supportedLngs_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return [2, languagesMap];
        }
    });
}); };
exports.loadCommands = loadCommands;
var bindEvents = function (client) { return __awaiter(void 0, void 0, void 0, function () {
    var basePath, eventsFiles, eventsFiles_1, eventsFiles_1_1, eventFileName, on, eventFile, rawEventModule, eventFunction, e_5_1;
    var e_5, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                basePath = path_1.default.join(__dirname, '..', 'events');
                eventsFiles = fs_1.default.readdirSync(basePath);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, 8, 13]);
                eventsFiles_1 = __asyncValues(eventsFiles);
                _b.label = 2;
            case 2: return [4, eventsFiles_1.next()];
            case 3:
                if (!(eventsFiles_1_1 = _b.sent(), !eventsFiles_1_1.done)) return [3, 6];
                eventFileName = eventsFiles_1_1.value;
                on = eventFileName.split('.')[0];
                eventFile = path_1.default.join(basePath, eventFileName);
                return [4, Promise.resolve().then(function () { return __importStar(require(eventFile)); })];
            case 4:
                rawEventModule = _b.sent();
                eventFunction = rawEventModule.default;
                client.on(on, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return eventFunction.apply(void 0, __spreadArray([client], __read(args)));
                });
                _b.label = 5;
            case 5: return [3, 2];
            case 6: return [3, 13];
            case 7:
                e_5_1 = _b.sent();
                e_5 = { error: e_5_1 };
                return [3, 13];
            case 8:
                _b.trys.push([8, , 11, 12]);
                if (!(eventsFiles_1_1 && !eventsFiles_1_1.done && (_a = eventsFiles_1.return))) return [3, 10];
                return [4, _a.call(eventsFiles_1)];
            case 9:
                _b.sent();
                _b.label = 10;
            case 10: return [3, 12];
            case 11:
                if (e_5) throw e_5.error;
                return [7];
            case 12: return [7];
            case 13: return [2];
        }
    });
}); };
exports.bindEvents = bindEvents;
