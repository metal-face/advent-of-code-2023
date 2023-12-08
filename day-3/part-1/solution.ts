import { input } from "../input";

function gatherNumbers(): void {
    let sum: number = 0;

    let numberRegex: RegExp = /[0-9]+/g;

    input.forEach((line: string, i: number) => {
        line.match(numberRegex).forEach((result) => {
            console.log(result);
            console.log("indexOf() >>>", line.indexOf(result));
            console.log("lastIndexOf() >>>", line.lastIndexOf(result));
        });
    });
}

gatherNumbers();
