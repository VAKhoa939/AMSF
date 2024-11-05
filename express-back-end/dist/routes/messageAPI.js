"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messageAPI_1 = require("../handlers/messageAPI");
const route = (0, express_1.Router)();
route.post('/', messageAPI_1.postAIMessage);
exports.default = route;
