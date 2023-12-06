import { inputArr } from "../part-1/input";
import { numberMap } from "./number-map-b";

function solution(input: string[]): number {
    const numArr = [];
    let totalSum = 0;

    input.forEach((line: string, i) => {
        let firstIndex = Number.MAX_SAFE_INTEGER;
        let lastIndex = -1;
        let firstNum = 0;
        let lastNum = 0;

        for (const key in numberMap) {
            const loopFirstIndex = line.indexOf(key);
            const loopLastIndex = line.lastIndexOf(key);

            if (loopFirstIndex > -1 && loopLastIndex > -1) {
                if (firstIndex > loopFirstIndex) {
                    firstIndex = loopFirstIndex;
                    firstNum = numberMap[key];
                }
                if (lastIndex < loopLastIndex) {
                    lastIndex = loopLastIndex;
                    lastNum = numberMap[key];
                }
            }
        }
        numArr.push(parseInt(`${firstNum}${lastNum}`));
    });

    numArr.forEach((item) => {
        totalSum += item;
    });

    // should out 54239

    return totalSum;
}

function exec() {
    // const testInput = [
    //     "two1nine",
    //     "eightwothree",
    //     "abcone2threexyz",
    //     "xtwone3four",
    //     "4nineeightseven2",
    //     "zoneight234",
    //     "7pqrstsixteen",
    // ];
    console.log(solution(inputArr));
    // console.log(solution(testInput));
}

exec();
