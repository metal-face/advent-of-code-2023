import { inputArr } from "../part-1/input";
import { numberMap } from "./number-map";

function solution(input: string[]): number {
    const giantString: string = input.join("-");
    let numString: string = "";
    let numArr: string[] = [];
    let numToAdd: number = 0;
    let totalSum: number = 0;

    for (let i = 0; i < giantString.length; i++) {
        if (giantString.charCodeAt(i) >= 48 && giantString.charCodeAt(i) <= 57) {
            numArr.push(giantString[i]);
        }

        if (giantString.charCodeAt(i) < 48 || giantString.charCodeAt(i) > 57) {
            if (giantString[i] !== "-") {
                numString += giantString[i];
            }
        }

        if (numString.length > 2) {
            numberMap.forEach((value: number, key: string) => {
                if (numString.includes(key)) {
                    numArr.push(value.toString());
                    numString = "";
                }
            });
        }

        if (giantString[i] === "-" || giantString[i] === undefined) {
            if (numArr.length === 1) {
                numToAdd = parseInt(numArr[0].concat(numArr[0]));
                totalSum += numToAdd;

                numToAdd = 0;
                numArr.splice(0, numArr.length);
                numString = "";
            }

            if (numArr.length >= 2) {
                numToAdd = parseInt(`${numArr[0]}${numArr[numArr.length - 1]}`);
                totalSum += numToAdd;

                numArr.splice(0, numArr.length);
                numToAdd = 0;
                numString = "";
            }

            console.log(`total sum >>> ${totalSum}`, `numArr >>> ${numArr}`);

            numArr.splice(0, numArr.length);
            numToAdd = 0;
            numString = "";
        }
    }

    return totalSum;
    // Should be 53539
}

function exec() {
    console.log(solution(inputArr));
}

exec();
