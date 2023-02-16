# Assignment 03: Create a module-based command line Node.js package (with CLI)

This assignment will help you learn to create an installable Node.js module package. You'll also provide a command line interface with it. 

## DO NOT CLONE THIS REPOSITORY DIRECTLY FROM THE TEMPLATE REPO

Use the personalized repository that is generated when you follow the GitHub classroom link instead: https://classroom.github.com/a/p57R-IU9

**_If you clone this repo directly, it will not be added to the organization as an individual repo associated with your account and you will not be able to push to it._**

## Description

The purpose of this assignment is to create an installable Node.js module package.

The package you create will contain a module (or multiple modules) as well as configuration and scripts to allow the user to run `node-rps` and `node-rpsls` after instaling. 

The package will contain command line games of "[Rock Paper Scissors](https://en.wikipedia.org/wiki/Rock_paper_scissors)" (`node-rps`) and the more advanced version, "[Rock Paper Scissors Lizard Spock](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)"  (`node-rpsls`).
We will refer to the games hereafter as RPS and RPSLS, respectively.

There are [a lot]() [of examples]() [of how]() to create a Rock Paper Scissors game using browser-side JavaScript. Make use of them and adapt them for your purposes.

See below for rules under example messages output.

## Setup

1. After you've cloned your repository, run `npm init` and follow it through, adding and changing information as needed. 
2. Set package name to `node-rpsls`. 
2. Set the `main` file to be `./lib/rpsls.js`
3. Set the license to match the license in the repository.
4. Once your `package.json` file is created, set two `bin` files as `"node-rps": "./bin/rps-cli.js"` and `"node-rpsls": "rpsls-cli.js"`.
5. Install dependencies. You'll need minimist for this assignment to parse command line arguments.
6. Create directories `bin` and `lib` inside the root of the directory.
7. Create `rpsls.js` inside the `lib` directory. This is going to be the main file and also where you will put your exported RPS and RPSLS function(s). 
8. Create `rps-cli.js` and `rpsls-cli.js` inside the `bin` directory. These are going to be the files that run when you link/install the package and run `node-rps` and `node-rpsls`, respectively.
9. Put the appropriate shebang in the `./bin/*-cli.js` files. 
10. Make sure that the `./bin/*-cli.js` files are executable (i.e. run `chmod +x ./bin/*-cli.js`). 

## Requirements

Structural requirements

1. Importable modules for RPS and RPSLS using ES `import` method.
2. A separate command line interface (wrapper) for both RPS and RPSLS.

Operational requirements

1. Two versions of the game (RPS and RPSLS) in one package.
2. If the command or function is called without an argument, it should return only the shot for one player, e.g. `{"player":"rock"}`.
3. If the command or function is called with an argument, it should return the results of a game between a player and an opponent, e.g. `{"player":"rock","opponent":"scissors","result":"lose"}`.
4. If you supply any argument other than those the individual function is expecting, the user should be presented with an error and a suggestion of the available options (e.g. "rock", "paper", "scissors" for RPS and "rock", "paper", "scissors", "lizard", "spock" for RPSLS). 
5. Each command should echo its own help text with usage examples when invoked with `-h` or `--help` (see below).
6. Each command should exho rules when invoked with `-r` `--rules` (see below).
7. If an out-of-range argument is supplied to your functions, the function should return an error on `console.error()` indicating that `[ARGUMENT] is out of range.`

> The reason that we want the function(s) to do the work and not our CLI scripts is that we want to be able to import from this package for future assignments.
> In order to not have to reengineer this later, it's best to create functions that return what we need as data objects and then use `JSON.stringify()` in the CLI wrapper to output JSON for the command line. 
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

### Importable module

Your module should be importable using the following or similar:

```
import { rps } from "/lib/rpsls.js"
import { rpsls } from "/lib/rpsls.js"
```

Or, once installed:

```
import { rps } from 'node-rpsls'
import { rpsls } from 'node-rpsls'
```

You will want the package from this assignment to be installable for a04 as well, so think about that. Read this for more info about importing: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

#### Logic and design

It is entirely up to you how you decide to create the logic of these two games and their underlying functions, but you will want to follow a few basic principles.

For example:

An importable `rps()` function in `./lib/rpsls.js` should ideally return an object with form similar to this:

```
{
  player: 'rock'
}
```

But that same function should not return `lizard` or `spock` because those are out of range for the Rock Paper Scissors game.

An importable `rpsls()` function, on the other hand, would return any of the elements in this array: `[ 'rock','paper','scissors','lizard','spock']`

You must also structure your functions so that if an argument is supplied, then the function would return the result of a game between the user/player and an opponent. Like this: 

```
let shot = Spock'
rpsls(shot)
```

```
>
{
  player: 'Spock',
  opponent: 'rock',
  result: win'
}
```
> **_IMPORTANT:_** Your functions must be case agnostic, i.e. they have to be able to take arguments that have capital letters or lowercase.
> 

### CLI

The command line interface will be used to pass values to the arguments in your function.

The command line wrapper will return JSON results.

#### CLI Specifications

Your command line interface for both RPS and RPSLS should behave as follows:

1. If no argument supplied, return a single play shot in JSON: `{"player":"rock"}`
2. If an unlabeled argument is supplied (e.g. `node-rpsls rock`), return the results of a game: `{"player":"rock","opponent":"Spock","result":"lose"}`
3. If `-h` or `--help` is passed as a command line argument, return a help/usage message (see below).
4. If `-r` or `--rules` is passed as a command line argument, return a listing of the game rules (see below).
5. If an unlabeled argument is supplied but is out of range, and the function should return an out-of-range error, and the error handler in the CLI wrapper should return a help/usage message _AND_ listing of rules.

##### Example help/usage message for RPS

```
Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}
```

##### Example rules message for RPS

```
Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors
```

##### Example help/usage message for RPSLS

```
Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}
```

##### Example rules message for RPSLS

```
Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors
```

### Resources

#### Game rules

[https://wrpsa.com/the-official-rules-of-rock-paper-scissors/](https://wrpsa.com/the-official-rules-of-rock-paper-scissors/)

[How to Play Rock, Paper, Scissors: A Simple Guide](https://www.wikihow.com/Play-Rock,-Paper,-Scissors)

[The Lizard-Spock Expansion](https://bigbangtheory.fandom.com/wiki/The_Lizard-Spock_Expansion)

[Rock, Paper, Scissors, Lizard, Spock](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)

[How to Play Rock, Paper, Scissors, Lizard, Spock](https://www.instructables.com/How-to-Play-Rock-Paper-Scissors-Lizard-Spock/) - Instructables

[How to Play Rock Paper Scissors Lizard Spock](https://www.wikihow.com/Play-Rock-Paper-Scissors-Lizard-Spock)

#### Example playable online games

https://rpsls.net/ - This one lets you play an opponent at a unique URL or a random opponent. 

#### Example how-to-build guides

https://www.theserverside.com/tutorial/Tutorial-Coding-a-simple-Rock-Paper-Scissors-application-in-JavaScript

https://learnersbucket.com/tutorials/js-projects/rock-paper-scissor-lizard-spock-game-in-javascript/

https://github.com/partha7978/Rock-Paper-Scissors-Lizard-Spock

https://hackernoon.com/how-to-create-rock-paper-scissors-spock-lizard-in-javascript-991k36hy

https://codepen.io/763004/pen/pPGGyP

https://stackoverflow.com/questions/22623331/rock-paper-scissors-lizard-spock-in-javascript
