import { inputArr } from "../part-1/input";
import { numberMap } from "./number-map";

function solution(input: string[]): number {
    // Combine the input array of strings into one giant string separated by '-'
    const giantString: string = input.join("-");

    // As we accumulate calibration values, they will be stored here
    let calibrationValues: number[] = [];

    // A string buffer to build string numbers in an input string
    let stringBuffer: string = "";

    // An array to store the numbers found in a single input string
    let numBuffer: string[] = [];

    // The total sum of each item in the calibrationValue array
    let totalSum: number = 0;

    for (let i = 0; i < giantString.length; i++) {
        // If the ASCII code at 'i' is between 48 and 57, push it into the temp array
        if (giantString.charCodeAt(i) >= 48 && giantString.charCodeAt(i) <= 57) {
            numBuffer.push(giantString[i]);
        }

        // If the character at 'i' is not a number
        if (giantString.charCodeAt(i) < 48 || giantString.charCodeAt(i) > 57) {
            // and not a "-"
            if (giantString[i] !== "-") {
                // add it to the end of the string buffer
                stringBuffer += giantString[i];
            }
        }

        console.log(`i: ${giantString[i]}\n`, `numString: ${stringBuffer}`);

        numberMap.forEach((value: number, key: string) => {
            if (stringBuffer.includes(key)) {
                numBuffer.push(value.toString());
                stringBuffer = "";
            }
        });

        console.log(`numArr: ${numBuffer}\n`);

        // If we have reached the separator
        if (giantString[i] === "-" || giantString[i + 1] === undefined) {
            // and there is one item in the temp array
            if (numBuffer.length === 1) {
                console.log(`one item in numArr >>> ${parseInt(numBuffer[0].concat(numBuffer[0]))}`);
                // concat together with itself, parse to an int, push into calibration value array
                calibrationValues.push(parseInt(numBuffer[0].concat(numBuffer[0])));
                // clear the temp array for next input string
                numBuffer.splice(0, numBuffer.length);
            }

            // or there are two are more items
            if (numBuffer.length >= 2) {
                // concat the first num and last num from temp array, cast to int, push into calibrationValueArray
                console.log(`two or more items in numArr >>> ${numBuffer[0]}${numBuffer[numBuffer.length - 1]}`);
                calibrationValues.push(parseInt(`${numBuffer[0]}${numBuffer[numBuffer.length - 1]}`));
                // clear the temp array
                numBuffer.splice(0, numBuffer.length);
            }

            // clear the temp array regardless
            numBuffer.splice(0, numBuffer.length);
            stringBuffer = "";
        }
    }

    // Iterate over combined numbers and add them all together
    for (let i = 0; i < calibrationValues.length; i++) {
        console.log("callibration values >>>", calibrationValues[i], "\ntotalSum >>>", totalSum);
        totalSum += calibrationValues[i];
    }

    return totalSum;
    // Should be 54239
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
