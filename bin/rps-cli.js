#!/usr/bin/env node
import { rps } from '../lib/rpsls.js';
import minimist from "minimist";

// Need this to store cli args
const args = minimist(process.argv.slice(2));

// Outputs help statements when -h or --help is used
if (args.h || args.help) {
    console.log('Usage: node-rps [SHOT] \nPlay Rock Paper Scissors (RPS) \n \n  -h, --help      display this help message and exit \n  -r, --rules     display the rules and exit \n\nExamples: \n  node-rps        Return JSON with single player RPS result. \n                  e.g. {"player":"rock"} \n  node-rps rock   Return JSON with results for RPS played against a simulated opponent. \n                  e.g {"player":"rock","opponent":"scissors","result":"win"}');
    process.exit(0);
}

// Outputs rules when -r or --rules is used
if (args.r || args.rules) {
    console.log('Rules for Rock Paper Scissors:\n\n  - Scissors CUTS Paper \n  - Paper COVERS Rock\n  - Rock CRUSHES Scissors');
    process.exit(0);
}

console.log(rps(args._[0]));
