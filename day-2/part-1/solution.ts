import { input } from "./input";

interface Game {
    red: number;
    blue: number;
    green: number;
}

let possibleGamesSum: number = 0;

const TOTAL_RED_CUBES: number = 12;
const TOTAL_GREEN_CUBES: number = 13;
const TOTAL_BLUE_CUBES: number = 14;

const blueRegex: RegExp = /[0-9]+ blue/g;
const greenRegex: RegExp = /[0-9]+ green/g;
const redRegex: RegExp = /[0-9]+ red/g;

function getColors(line: string, id: number): void {
    const blueMatches: RegExpMatchArray = line.match(blueRegex);
    const greenMatches: RegExpMatchArray = line.match(greenRegex);
    const redMatches: RegExpMatchArray = line.match(redRegex);

    let blueNumbers = blueMatches.map((item) => item.match(/^\d+/)[0]);
    let greenNumbers = greenMatches.map((item) => item.match(/^\d+/)[0]);
    let redNumbers = redMatches.map((item) => item.match(/^\d+/)[0]);

    const game: Game = {
        red: 0,
        blue: 0,
        green: 0,
    };

    blueNumbers.forEach((num) => {
        game.blue += parseInt(num);
    });

    greenNumbers.forEach((num) => {
        game.green += parseInt(num);
    });

    redNumbers.forEach((num) => {
        game.red += parseInt(num);
    });

    if (game.red <= TOTAL_RED_CUBES && game.blue <= TOTAL_BLUE_CUBES && game.green <= TOTAL_GREEN_CUBES) {
        console.log(id, game);
        possibleGamesSum += id;
    } else {
        console.log(game);
    }
}

function exec() {
    input.forEach((line: string, i: number) => {
        getColors(line, i + 1);
    });

    return possibleGamesSum;
}

console.log(exec());
