import { input } from "./input";

interface Game {
    red: number;
    blue: number;
    green: number;
}

const possibleGames: number[] = [];

const blues: RegExp = /[0-9] blue/g;
const greens: RegExp = /[0-9] green/g;
const reds: RegExp = /[0-9] red/g;

function getColors(line: string) {
    const blueMatches: RegExpMatchArray = line.match(blues);
    const greenMatches: RegExpMatchArray = line.match(greens);
    const redMatches: RegExpMatchArray = line.match(reds);

    const game: Game = {
        red: 0,
        blue: 0,
        green: 0,
    };

    console.log(blueMatches, greenMatches, redMatches);
}

input.forEach((line: string, i: number) => {
    if (i === 0) {
        getColors(line);
    }
});
