import {Command} from "commander";
import translate from "./index";

const {version} = require("../package.json");

const program = new Command();
program.version(version);

program.parse(process.argv);

translate(program.args[0]);