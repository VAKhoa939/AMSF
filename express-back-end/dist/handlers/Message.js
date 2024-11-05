"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMessage = isMessage;
exports.isMessageList = isMessageList;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isMessage(obj) {
    return 'content' in obj
        && 'className' in obj
        && 'type' in obj;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isMessageList(obj) {
    return Array.isArray(obj) && obj.every(isMessage);
}
