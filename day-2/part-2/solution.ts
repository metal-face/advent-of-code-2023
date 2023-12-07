import { input } from "../part-1/input";

interface Game {
    red: number;
    blue: number;
    green: number;
}

const blueRegex: RegExp = /[0-9]+ blue/g;
const greenRegex: RegExp = /[0-9]+ green/g;
const redRegex: RegExp = /[0-9]+ red/g;

function getLargestNumbers(line: string): Game {
    const idRemoved = line.split(":");
    const gameString = idRemoved[1].trim();
    const splitGames = gameString.split(";");

    const gamesLargestNums: Game = {
        red: 0,
        blue: 0,
        green: 0,
    };

    splitGames.forEach((game: string, i: number): void => {
        const blueMatches: RegExpMatchArray = game.match(blueRegex);
        const greenMatches: RegExpMatchArray = game.match(greenRegex);
        const redMatches: RegExpMatchArray = game.match(redRegex);

        const gameCount: Game = {
            red: 0,
            blue: 0,
            green: 0,
        };

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

        if (gameCount.blue > gamesLargestNums.blue) {
            gamesLargestNums.blue = gameCount.blue;
        }
        if (gameCount.green > gamesLargestNums.green) {
            gamesLargestNums.green = gameCount.green;
        }
        if (gameCount.red > gamesLargestNums.red) {
            gamesLargestNums.red = gameCount.red;
        }
    });
    return gamesLargestNums;
}

function exec(): number {
    const result: Game[] = [];
    let powerSum: number = 0;

    input.forEach((line: string) => {
        result.push(getLargestNumbers(line));
    });

    result.forEach((game) => {
        powerSum += game.blue * game.green * game.red;
    });

    return powerSum;
}

console.log(exec());
