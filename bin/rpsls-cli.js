#!/usr/bin/env node
import { rpsls } from '../lib/rpsls.js';
import minimist from "minimist";

// Need this to store cli args
const args = minimist(process.argv.slice(2));

// Outputs help statements when -h or --help is used
if (args.h || args.help) {
    console.log('Usage: node-rpsls [SHOT] \nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)! \n \n  -h, --help      display this help message and exit \n  -r, --rules     display the rules and exit \n\nExamples: \n  node-rpsls       Return JSON with single player RPS result. \n                  e.g. {"player":"rock"} \n  node-rpsls rock   Return JSON with results for RPS played against a simulated opponent. \n                  e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    process.exit(0);
}

// Outputs rules when -r or --rules is used
if (args.r || args.rules) {
    console.log('Rules for the Lizard-Spock Espansion of Rock Paper Scissors:\n\n  - Scissors CUTS Paper \n  - Paper COVERS Rock\n  - Rock SMOOSHES Lizard\n  - Lizard POISONS Spock\n  - Spock SMASHES Scissors\n  - Scissors DECAPITATES Lizard\n  - Lizard EATS Paper\n  - Paper DISPROVES Spock\n  - Spock VAPORIZES Rock\n  - Rock CRUSHES Scissors');
    process.exit(0);
}

// Pass arguments to rps function
let res = rpsls(args._[0]);
if (res == 'out-of-range error'){
    console.error(args._[0] + ' is out of range.\n');
    console.log('Usage: node-rpsls [SHOT] \nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)! \n \n  -h, --help      display this help message and exit \n  -r, --rules     display the rules and exit \n\nExamples: \n  node-rpsls       Return JSON with single player RPS result. \n                   e.g. {"player":"rock"} \n  node-rpsls rock  Return JSON with results for RPS played against a simulated opponent. \n                   e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    console.log('\n');
    console.log('Rules for the Lizard-Spock Espansion of Rock Paper Scissors:\n\n  - Scissors CUTS Paper \n  - Paper COVERS Rock\n  - Rock SMOOSHES Lizard\n  - Lizard POISONS Spock\n  - Spock SMASHES Scissors\n  - Scissors DECAPITATES Lizard\n  - Lizard EATS Paper\n  - Paper DISPROVES Spock\n  - Spock VAPORIZES Rock\n  - Rock CRUSHES Scissors');

}
else{
    console.log(JSON.stringify(res));
}
