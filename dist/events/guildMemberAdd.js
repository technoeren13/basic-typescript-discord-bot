"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (client, member) {
    console.log(member.user.username + " join from " + member.guild);
};
exports.default = handler;
