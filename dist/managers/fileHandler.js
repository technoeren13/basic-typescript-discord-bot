const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : new P((resolve) => { resolve(result.value); }).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const __generator = (this && this.__generator) || function (thisArg, body) {
  let _ = {
    label: 0, sent() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [],
  }; let f; let y; let t; let
    g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
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
    }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
};
const __asyncValues = (this && this.__asyncValues) || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  const m = o[Symbol.asyncIterator]; let
    i;
  return m ? m.call(o) : (o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator](), i = {}, verb('next'), verb('throw'), verb('return'), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise((resolve, reject) => { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then((v) => { resolve({ value: v, done: d }); }, reject); }
};
var __values = (this && this.__values) || function (o) {
  const m = typeof Symbol === 'function' && o[Symbol.iterator]; let
    i = 0;
  if (m) return m.call(o);
  return {
    next() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    },
  };
};
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
const __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  const result = {};
  if (mod != null) for (const k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
};
const _this = this;
Object.defineProperty(exports, '__esModule', { value: true });
const fs_1 = __importDefault(require('fs'));
const path_1 = __importDefault(require('path'));
const i18nManager_1 = require('./i18nManager');

const languagesMap = new Map([
  [
    'en',
    new Map(),
  ],
  [
    'tr',
    new Map(),
  ],
]);
const loadCommands = function () {
  return __awaiter(_this, void 0, void 0, function () {
    let e_1; let _a; let e_2; let _b; let e_3; let _c; let e_4; let _d; let commandIds; let basePath; let commandFolders; let commandFolders_1; let commandFolders_1_1; let commandFolder; let commandFile; let rawCommandModule; let commandModule; let commandInstance; let e_4_1; let supportedLngs_1; let supportedLngs_1_1; let language; let commandsMap; let commandIds_1; let commandIds_1_1; let commandObj; let aliasString; let _e; let _f; let
      alias;
    return __generator(this, (_g) => {
      switch (_g.label) {
        case 0:
          console.time('loadCommands');
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
          return [4, Promise.resolve().then(() => __importStar(require(commandFile)))];
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
          e_4_1 = _g.sent();
          e_4 = { error: e_4_1 };
          return [3, 13];
        case 8:
          _g.trys.push([8, , 11, 12]);
          if (!(commandFolders_1_1 && !commandFolders_1_1.done && (_d = commandFolders_1.return))) return [3, 10];
          return [4, _d.call(commandFolders_1)];
        case 9:
          _g.sent();
          _g.label = 10;
        case 10: return [3, 12];
        case 11:
          if (e_4) throw e_4.error;
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
                  for (commandIds_1 = __values(commandIds), commandIds_1_1 = commandIds_1.next(); !commandIds_1_1.done; commandIds_1_1 = commandIds_1.next()) {
                    commandObj = commandIds_1_1.value;
                    aliasString = i18nManager_1.i18next.t(`${commandObj.id}:aliases`);
                    try {
                      for (_e = __values(aliasString.split(',')), _f = _e.next(); !_f.done; _f = _e.next()) {
                        alias = _f.value;
                        commandsMap.set(alias, commandObj.instance);
                      }
                    } catch (e_3_1) { e_3 = { error: e_3_1 }; } finally {
                      try {
                        if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
                      } finally { if (e_3) throw e_3.error; }
                    }
                  }
                } catch (e_2_1) { e_2 = { error: e_2_1 }; } finally {
                  try {
                    if (commandIds_1_1 && !commandIds_1_1.done && (_b = commandIds_1.return)) _b.call(commandIds_1);
                  } finally { if (e_2) throw e_2.error; }
                }
              }
            }
          } catch (e_1_1) { e_1 = { error: e_1_1 }; } finally {
            try {
              if (supportedLngs_1_1 && !supportedLngs_1_1.done && (_a = supportedLngs_1.return)) _a.call(supportedLngs_1);
            } finally { if (e_1) throw e_1.error; }
          }
          console.timeEnd('loadCommands');
          console.log(languagesMap);
          return [2];
      }
    });
  });
};
exports.loadCommands = loadCommands;
