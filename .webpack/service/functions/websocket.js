(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./functions/websocket.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions/websocket.ts":
/*!********************************!*\
  !*** ./functions/websocket.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar save_connection_1 = __webpack_require__(/*! ../lib/save-connection */ \"./lib/save-connection.ts\");\nvar delete_connection_1 = __webpack_require__(/*! ../lib/delete-connection */ \"./lib/delete-connection.ts\");\nvar aws_sdk_1 = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\nvar process_message_1 = __webpack_require__(/*! ../lib/process-message */ \"./lib/process-message.ts\");\nvar sendError = function (agma, connectionId, error) { return __awaiter(_this, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, agma.postToConnection({\n                ConnectionId: connectionId,\n                Data: JSON.stringify({ error: error }),\n            }).promise()];\n    });\n}); };\nvar initConnection = function (connectionId, room, author) { return __awaiter(_this, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        console.log('initConnection', room, author);\n        return [2 /*return*/, save_connection_1.default(connectionId, room, author)];\n    });\n}); };\nvar onDisconnect = function (connectionId) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, delete_connection_1.default(connectionId)];\n}); }); };\nexports.handler = function (event) { return __awaiter(_this, void 0, void 0, function () {\n    var _a, eventType, connectionId, domainName, stage, queryStringParameters, _b, room, author, agma, _c, e_1;\n    return __generator(this, function (_d) {\n        switch (_d.label) {\n            case 0:\n                _a = event.requestContext, eventType = _a.eventType, connectionId = _a.connectionId, domainName = _a.domainName, stage = _a.stage;\n                queryStringParameters = event.queryStringParameters;\n                _b = (queryStringParameters || {}), room = _b.room, author = _b.author;\n                agma = new aws_sdk_1.ApiGatewayManagementApi({\n                    endpoint: domainName + \"/\" + stage,\n                });\n                _d.label = 1;\n            case 1:\n                _d.trys.push([1, 10, , 11]);\n                _c = eventType;\n                switch (_c) {\n                    case 'CONNECT': return [3 /*break*/, 2];\n                    case 'DISCONNECT': return [3 /*break*/, 4];\n                    case 'MESSAGE': return [3 /*break*/, 6];\n                }\n                return [3 /*break*/, 8];\n            case 2: return [4 /*yield*/, initConnection(connectionId, room, author)];\n            case 3:\n                _d.sent();\n                return [3 /*break*/, 9];\n            case 4: return [4 /*yield*/, onDisconnect(connectionId)];\n            case 5:\n                _d.sent();\n                return [3 /*break*/, 9];\n            case 6: return [4 /*yield*/, process_message_1.processMessage(agma, connectionId, JSON.parse(event.body))];\n            case 7:\n                _d.sent();\n                return [3 /*break*/, 9];\n            case 8:\n                console.error(\"Unknown eventType: \" + eventType);\n                _d.label = 9;\n            case 9: return [3 /*break*/, 11];\n            case 10:\n                e_1 = _d.sent();\n                console.error(e_1);\n                sendError(agma, connectionId, e_1);\n                return [3 /*break*/, 11];\n            case 11:\n                console.log('Finishing');\n                return [2 /*return*/, {\n                        statusCode: 200,\n                    }];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./functions/websocket.ts?");

/***/ }),

/***/ "./lib/delete-connection.ts":
/*!**********************************!*\
  !*** ./lib/delete-connection.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar env_variables_1 = __webpack_require__(/*! ./env-variables */ \"./lib/env-variables.ts\");\nvar aws_sdk_1 = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\nvar dynamodb = new aws_sdk_1.DynamoDB.DocumentClient();\nexports.default = (function (connectionId) { return __awaiter(_this, void 0, void 0, function () {\n    var req;\n    return __generator(this, function (_a) {\n        console.log('delete connection', connectionId);\n        req = {\n            Key: {\n                connectionId: connectionId,\n            },\n            TableName: env_variables_1.default.ConnectionsTable,\n        };\n        return [2 /*return*/, dynamodb.delete(req).promise().then(function () { return console.log('deleted'); })];\n    });\n}); });\n\n\n//# sourceURL=webpack:///./lib/delete-connection.ts?");

/***/ }),

/***/ "./lib/env-variables.ts":
/*!******************************!*\
  !*** ./lib/env-variables.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    MessagesTable: process.env.messages_table,\n    ConnectionsTable: process.env.connections_table,\n    RoomsTable: process.env.rooms_table,\n    DynamoDbEndpoint: process.env.dynamo_db_endpoint\n};\n\n\n//# sourceURL=webpack:///./lib/env-variables.ts?");

/***/ }),

/***/ "./lib/generate-random-id.ts":
/*!***********************************!*\
  !*** ./lib/generate-random-id.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar uuid4 = __webpack_require__(/*! uuid/v4 */ \"./node_modules/uuid/v4.js\");\nexports.default = (function () { return uuid4(); });\n\n\n//# sourceURL=webpack:///./lib/generate-random-id.ts?");

/***/ }),

/***/ "./lib/get-language.ts":
/*!*****************************!*\
  !*** ./lib/get-language.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar aws_sdk_1 = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\nvar comprehend = new aws_sdk_1.Comprehend();\nvar dominantLanguageReducer = function (chosen, lang) {\n    if (lang.Score !== undefined && lang.LanguageCode !== undefined && lang.Score > chosen.Score) {\n        return lang;\n    }\n    return chosen;\n};\nvar pickLanguage = function (res) {\n    if (!res.Languages)\n        return 'en';\n    var start = { LanguageCode: 'en', Score: 0 };\n    var chosen = res.Languages.reduce(dominantLanguageReducer, start);\n    return chosen.LanguageCode;\n};\nmodule.exports = function (text) { return __awaiter(_this, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, comprehend.detectDominantLanguage({\n                Text: text,\n            }).promise()\n                .then(pickLanguage)];\n    });\n}); };\n\n\n//# sourceURL=webpack:///./lib/get-language.ts?");

/***/ }),

/***/ "./lib/get-messages.ts":
/*!*****************************!*\
  !*** ./lib/get-messages.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar env_variables_1 = __webpack_require__(/*! ./env-variables */ \"./lib/env-variables.ts\");\nvar aws_sdk_1 = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\nvar dynamodb = new aws_sdk_1.DynamoDB.DocumentClient();\nexports.default = (function (room) { return __awaiter(_this, void 0, void 0, function () {\n    var req, resp;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                req = {\n                    TableName: env_variables_1.default.MessagesTable,\n                    IndexName: 'roomIdx',\n                    KeyConditionExpression: \"room = :room\",\n                    ExpressionAttributeValues: {\n                        \":room\": room\n                    },\n                };\n                return [4 /*yield*/, dynamodb.query(req).promise()];\n            case 1:\n                resp = _a.sent();\n                return [2 /*return*/, resp.Items];\n        }\n    });\n}); });\n\n\n//# sourceURL=webpack:///./lib/get-messages.ts?");

/***/ }),

/***/ "./lib/process-message.ts":
/*!********************************!*\
  !*** ./lib/process-message.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar save_message_1 = __webpack_require__(/*! ./save-message */ \"./lib/save-message.ts\");\nvar get_messages_1 = __webpack_require__(/*! ./get-messages */ \"./lib/get-messages.ts\");\nvar sendMessages = function (agma, connectionId, messages) { return __awaiter(_this, void 0, void 0, function () {\n    var sent;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, agma.postToConnection({\n                    ConnectionId: connectionId,\n                    Data: JSON.stringify({ action: 'init', messages: messages }),\n                }).promise()];\n            case 1:\n                sent = _a.sent();\n                return [2 /*return*/, sent];\n        }\n    });\n}); };\nvar sendMessageToRoom = function (agma, connectionId, message) { return __awaiter(_this, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, agma.postToConnection({\n                ConnectionId: connectionId,\n                Data: JSON.stringify({ action: 'message', message: message }),\n            }).promise()];\n    });\n}); };\nvar sendAllMessages = function (agma, connectionId, room) { return __awaiter(_this, void 0, void 0, function () {\n    var messages;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, get_messages_1.default(room)];\n            case 1:\n                messages = _a.sent();\n                return [4 /*yield*/, sendMessages(agma, connectionId, messages)];\n            case 2:\n                _a.sent();\n                return [2 /*return*/];\n        }\n    });\n}); };\nvar doSaveMessage = function (agma, connectionId, message) { return __awaiter(_this, void 0, void 0, function () {\n    var saved;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, save_message_1.default(message)];\n            case 1:\n                saved = _a.sent();\n                return [4 /*yield*/, sendMessageToRoom(agma, connectionId, saved)];\n            case 2:\n                _a.sent();\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.processMessage = function (agma, connectionId, body) { return __awaiter(_this, void 0, void 0, function () {\n    var _a;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = body.action;\n                switch (_a) {\n                    case 'init': return [3 /*break*/, 1];\n                    case 'message': return [3 /*break*/, 3];\n                }\n                return [3 /*break*/, 5];\n            case 1: return [4 /*yield*/, sendAllMessages(agma, connectionId, body.room)];\n            case 2:\n                _b.sent();\n                return [3 /*break*/, 5];\n            case 3: return [4 /*yield*/, doSaveMessage(agma, connectionId, body.message)];\n            case 4:\n                _b.sent();\n                return [3 /*break*/, 5];\n            case 5: return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack:///./lib/process-message.ts?");

/***/ }),

/***/ "./lib/save-connection.ts":
/*!********************************!*\
  !*** ./lib/save-connection.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar env_variables_1 = __webpack_require__(/*! ./env-variables */ \"./lib/env-variables.ts\");\nvar aws_sdk_1 = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\nvar dynamodb = new aws_sdk_1.DynamoDB.DocumentClient();\nexports.default = (function (connectionId, room, author) { return __awaiter(_this, void 0, void 0, function () {\n    var Item, req;\n    return __generator(this, function (_a) {\n        Item = {\n            connectionId: connectionId,\n            room: room,\n            author: author,\n        };\n        req = {\n            TableName: env_variables_1.default.ConnectionsTable,\n            Item: Item,\n        };\n        return [2 /*return*/, dynamodb.put(req).promise()];\n    });\n}); });\n\n\n//# sourceURL=webpack:///./lib/save-connection.ts?");

/***/ }),

/***/ "./lib/save-message.ts":
/*!*****************************!*\
  !*** ./lib/save-message.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar env_variables_1 = __webpack_require__(/*! ./env-variables */ \"./lib/env-variables.ts\");\nvar generate_random_id_1 = __webpack_require__(/*! ../lib/generate-random-id */ \"./lib/generate-random-id.ts\");\nvar AWS = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\nvar dynamodb = new AWS.DynamoDB.DocumentClient();\nvar getLanguage = __webpack_require__(/*! ../lib/get-language */ \"./lib/get-language.ts\");\nvar translateToEnglish = __webpack_require__(/*! ../lib/translate-to-english */ \"./lib/translate-to-english.ts\");\nexports.default = (function (_a) {\n    var message = _a.message, author = _a.author, room = _a.room;\n    return __awaiter(_this, void 0, void 0, function () {\n        var language, Item, _b, req;\n        return __generator(this, function (_c) {\n            switch (_c.label) {\n                case 0: return [4 /*yield*/, getLanguage(message)];\n                case 1:\n                    language = _c.sent();\n                    Item = {\n                        messageId: generate_random_id_1.default(),\n                        message: message,\n                        room: room,\n                        author: author,\n                        language: language,\n                    };\n                    if (!(language !== 'en')) return [3 /*break*/, 3];\n                    _b = Item;\n                    return [4 /*yield*/, translateToEnglish(message, language)];\n                case 2:\n                    _b.translation = _c.sent();\n                    _c.label = 3;\n                case 3:\n                    req = {\n                        TableName: env_variables_1.default.MessagesTable,\n                        Item: Item,\n                    };\n                    return [4 /*yield*/, dynamodb.put(req).promise()];\n                case 4:\n                    _c.sent();\n                    return [2 /*return*/, Item];\n            }\n        });\n    });\n});\n\n\n//# sourceURL=webpack:///./lib/save-message.ts?");

/***/ }),

/***/ "./lib/translate-to-english.ts":
/*!*************************************!*\
  !*** ./lib/translate-to-english.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar AWS = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\nvar translate = new AWS.Translate();\nvar getTranslatedText = function (t) { return t.TranslatedText; };\nmodule.exports = function (text, language) { return __awaiter(_this, void 0, void 0, function () {\n    var params;\n    return __generator(this, function (_a) {\n        params = {\n            SourceLanguageCode: language,\n            TargetLanguageCode: 'en',\n            Text: text,\n        };\n        return [2 /*return*/, translate.translateText(params).promise().then(getTranslatedText)];\n    });\n}); };\n\n\n//# sourceURL=webpack:///./lib/translate-to-english.ts?");

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([bth[buf[i++]], bth[buf[i++]], \n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]]]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/rng.js":
/*!**************************************!*\
  !*** ./node_modules/uuid/lib/rng.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Unique ID creation requires a high quality random # generator.  In node.js\n// this is pretty straight-forward - we use the crypto API.\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nmodule.exports = function nodeRNG() {\n  return crypto.randomBytes(16);\n};\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof(options) == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n  options = options || {};\n\n  var rnds = options.random || (options.rng || rng)();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = (rnds[6] & 0x0f) | 0x40;\n  rnds[8] = (rnds[8] & 0x3f) | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || bytesToUuid(rnds);\n}\n\nmodule.exports = v4;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/v4.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ })

/******/ })));