import { input } from "./input";

interface Game {
    red: number;
    blue: number;
    green: number;
}

let possibleGamesSum: number = 0;

const MAX_RED_CUBES: number = 12;
const MAX_GREEN_CUBES: number = 13;
const MAX_BLUE_CUBES: number = 14;

const blueRegex: RegExp = /[0-9]+ blue/g;
const greenRegex: RegExp = /[0-9]+ green/g;
const redRegex: RegExp = /[0-9]+ red/g;

function getColors(line: string, id: number): void {
    const idRemoved = line.split(":");
    const gameString = idRemoved[1].trim();
    const splitGames = gameString.split(";");

    const gameArr: Game[] = [];
    let possible: boolean = true;

    splitGames.forEach((game: string, i: number): void => {
        const gameCount: Game = {
            red: 0,
            blue: 0,
            green: 0,
        };

        const blueMatches: RegExpMatchArray = game.match(blueRegex);
        const greenMatches: RegExpMatchArray = game.match(greenRegex);
        const redMatches: RegExpMatchArray = game.match(redRegex);

        if (blueMatches) {
            let blueNumbers = blueMatches.map((item) => item.match(/^\d+/)[0]);
            gameCount.blue += parseInt(blueNumbers[0]);
        }
        if (greenMatches) {
            let greenNumbers = greenMatches.map((item) => item.match(/^\d+/)[0]);
            gameCount.green += parseInt(greenNumbers[0]);
        }
        if (redMatches) {
            let redNumbers = redMatches.map((item) => item.match(/^\d+/)[0]);
            gameCount.red += parseInt(redNumbers[0]);
        }

        if (gameCount.red > MAX_RED_CUBES || gameCount.blue > MAX_BLUE_CUBES || gameCount.green > MAX_GREEN_CUBES) {
            possible = false;
        } else {
            gameArr.push(gameCount);
        }

        if (splitGames[i + 1] === undefined && possible === true) {
            possibleGamesSum += id;
        }
    });
}

function exec() {
    input.forEach((line: string, i: number) => {
        getColors(line, i + 1);
    });

    return possibleGamesSum;
}

console.log(exec());
