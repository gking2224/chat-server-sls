"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = require("aws-sdk");
var save_connection_1 = require("../lib/save-connection");
var save_message_1 = require("../lib/save-message");
var get_messages_1 = require("../lib/get-messages");
var sendMessageToRoom = function (agma, connectionId, message) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, agma.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify({ action: 'message', message: message }),
            }).promise()];
    });
}); };
var sendError = function (agma, connectionId, error) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, agma.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify({ error: error }),
            }).promise()];
    });
}); };
var sendMessages = function (agma, connectionId, messages) { return __awaiter(_this, void 0, void 0, function () {
    var sent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, agma.postToConnection({
                    ConnectionId: connectionId,
                    Data: JSON.stringify({ action: 'init', messages: messages }),
                }).promise()];
            case 1:
                sent = _a.sent();
                return [2 /*return*/, sent];
        }
    });
}); };
var initConnection = function (agma, connectionId, room, author) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, save_connection_1.default(connectionId, room, author)];
}); }); };
var sendAllMessages = function (agma, connectionId, room) { return __awaiter(_this, void 0, void 0, function () {
    var messages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, get_messages_1.default(room)];
            case 1:
                messages = _a.sent();
                return [4 /*yield*/, sendMessages(agma, connectionId, messages)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var doSaveMessage = function (agma, connectionId, message) { return __awaiter(_this, void 0, void 0, function () {
    var saved;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, save_message_1.default(message)];
            case 1:
                saved = _a.sent();
                return [4 /*yield*/, sendMessageToRoom(agma, connectionId, saved)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var processMessage = function (agma, connectionId, body) { return __awaiter(_this, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = body.action;
                switch (_a) {
                    case 'init': return [3 /*break*/, 1];
                    case 'message': return [3 /*break*/, 3];
                }
                return [3 /*break*/, 5];
            case 1: return [4 /*yield*/, sendAllMessages(agma, connectionId, body.room)];
            case 2:
                _b.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, doSaveMessage(agma, connectionId, body.message)];
            case 4:
                _b.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.handler = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var _a, eventType, connectionId, domainName, stage, queryStringParameters, _b, room, author, agma, _c, e_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = event.requestContext, eventType = _a.eventType, connectionId = _a.connectionId, domainName = _a.domainName, stage = _a.stage;
                queryStringParameters = event.queryStringParameters;
                _b = (queryStringParameters || {}), room = _b.room, author = _b.author;
                agma = new AWS.ApiGatewayManagementApi({
                    endpoint: domainName + "/" + stage,
                });
                _d.label = 1;
            case 1:
                _d.trys.push([1, 8, , 9]);
                _c = eventType;
                switch (_c) {
                    case 'CONNECT': return [3 /*break*/, 2];
                    case 'MESSAGE': return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2: return [4 /*yield*/, initConnection(agma, connectionId, room, author)];
            case 3:
                _d.sent();
                return [3 /*break*/, 7];
            case 4: return [4 /*yield*/, processMessage(agma, connectionId, JSON.parse(event.body))];
            case 5:
                _d.sent();
                return [3 /*break*/, 7];
            case 6:
                console.error("Unknown eventType: " + eventType);
                _d.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                e_1 = _d.sent();
                sendError(agma, connectionId, e_1);
                return [3 /*break*/, 9];
            case 9:
                console.log('Finishing');
                return [2 /*return*/, {
                        statusCode: 200,
                    }];
        }
    });
}); };
//# sourceMappingURL=websocket.js.map