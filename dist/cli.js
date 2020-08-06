#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var main_1 = __importDefault(require("./main"));
var version = require("../package.json").version;
var program = new commander_1.Command();
program.version(version);
program.parse(process.argv);
program.args[0] && main_1.default(program.args[0]);
