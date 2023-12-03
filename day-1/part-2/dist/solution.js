"use strict";
exports.__esModule = true;
var input_1 = require("../part-1/input");
var number_map_1 = require("./number-map");
function solution(input) {
    // Combine the input array of strings into one giant string separated by '-'
    var giantString = input.join("-");
    // As we accumulate calibration values, they will be stored here
    var calibrationValues = [];
    // An array to store the numbers found in a single input string
    var numArr = [];
    // An array to store the characters of an input string
    var charArr = [];
    var numString = "";
    // The total sum of each item in the calibrationValue array
    var totalSum = 0;
    for (var i = 0; i < giantString.length; i++) {
        // If the ASCII code at 'i' is between 48 and 57, push it into the temp array
        if (giantString.charCodeAt(i) >= 48 && giantString.charCodeAt(i) <= 57) {
            numArr.push(giantString[i]);
        }
        // If the character at 'i' is not a number
        if (giantString.charCodeAt(i) < 48 || giantString.charCodeAt(i) > 57) {
            // and not a "-"
            if (giantString[i] !== "-") {
                // push it into the char array
                charArr.push(giantString[i]);
                // Grow the numString
                numString = charArr.join("");
            }
        }
        console.log(charArr, numString);
        number_map_1.numberMap.forEach(function (value, key) {
            // and the numString includes a key in the number map
            if (numString.includes(key)) {
                // push the value at that key into the calibration values array
                calibrationValues.push(value);
                // reset the string and array for next possible match
                numString = "";
                charArr.splice(0, charArr.length);
            }
        });
        // If at the last item in the giant string and there is a number in the temp array
        if (giantString[i + 1] === undefined && numArr.length) {
            // Concat that number together with itself, parse to an int and push into calibration value array
            calibrationValues.push(parseInt(numArr[0].concat(numArr[0])));
            // Empty the array
            numArr.splice(0, numArr.length);
        }
        // If we have reached the separator
        if (giantString[i] === "-") {
            console.log("reached end of string", calibrationValues);
            // and there is one item in the temp array
            if (numArr.length === 1) {
                // concat together with itself, parse to an int, push into calibration value array
                calibrationValues.push(parseInt(numArr[0].concat(numArr[0])));
                // clear the temp array for next input string
                numArr.splice(0, numArr.length);
            }
            // or there are two are more items
            if (numArr.length >= 2) {
                // concat the first num and last num from temp array, cast to int, push into calibrationValueArray
                calibrationValues.push(parseInt("" + numArr[0] + numArr[numArr.length - 1]));
                // clear the temp array
                numArr.splice(0, numArr.length);
            }
            // clear the temp array regardless
            numArr.splice(0, numArr.length);
            charArr.splice(0, charArr.length);
            numString = "";
        }
    }
    // clear the temp arr for next input string
    numArr.splice(0, numArr.length);
    // Iterate over combined numbers and add them all together
    for (var i = 0; i < calibrationValues.length; i++) {
        totalSum += calibrationValues[i];
    }
    return totalSum;
}
function exec() {
    console.log(solution(input_1.inputArr));
}
exec();
