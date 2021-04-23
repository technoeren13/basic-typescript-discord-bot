"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ready = function (client) {
    console.log(client.user.username + " aktif!");
    client.user.setActivity("import { TechnoCanary } from 'technobot'");
};
exports.default = ready;
