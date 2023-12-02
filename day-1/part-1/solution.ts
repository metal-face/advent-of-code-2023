import { inputArr } from "./input";

function solution(input: string[]): number {
  // Combine the input array of strings into one giant string separated by '-'
  const giantString: string = input.join("-");
  
  // As we accumulate calibration values, they will be stored here
  let calibrationValues: number[] = [];
  
  // An array to store the numbers found in a single input string
  let tempArr: string[] = [];

  // The total sum of each item in the calibrationValue array
  let totalSum: number = 0;

  for (let i = 0; i < giantString.length; i++) {
    // If the ASCII code at 'i' is between 48 and 57, push it into the temp array
    if (giantString.charCodeAt(i) >= 48 && giantString.charCodeAt(i) <= 57) {
      tempArr.push(giantString[i]);
    }
    
    // If at the last item in the giant string and there is a number in the temp array
    if (giantString[i + 1] === undefined && tempArr.length) {
      // Concat that number together with itself, parse to an int and push into calibration value array
      calibrationValues.push(parseInt(tempArr[0].concat(tempArr[0])));
      // Empty the array
      tempArr.splice(0, tempArr.length);
    }

    // If we have reached the separator 
    if (giantString[i] === "-") {
      // and there is one item in the temp array
      if (tempArr.length === 1) {
        // concat together with itself, parse to an int, push into calibration value array
        calibrationValues.push(parseInt(tempArr[0].concat(tempArr[0])));
        // clear the temp array for next input string
        tempArr.splice(0, tempArr.length);  
      }
      
      // or there are two are more items   
      if (tempArr.length >= 2) {
        // concat the first num and last num from temp array, cast to int, push into calibrationValueArray
        calibrationValues.push(parseInt(`${tempArr[0]}${tempArr[tempArr.length - 1]}`));
        // clear the temp array
        tempArr.splice(0, tempArr.length);
      }     
    
      // clear the temp array regardless
      tempArr.splice(0, tempArr.length);
    }
  }

  // clear the temp arr for next input string
  tempArr.splice(0, tempArr.length);


  // Iterate over combined numbers and add them all together
  for (let i = 0; i < calibrationValues.length; i++) {
    totalSum += calibrationValues[i];
  }

  return totalSum;
}

function exec() {
  console.log(solution(inputArr));
}

exec();