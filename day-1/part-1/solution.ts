import { inputArr } from "./input";

function solution(input: string[]): number {
  // Combine the input string into one giant string separated by '-'
  const giantString: string = input.join("-");
  
  // An array to store all of the calibration values
  let calibrationValueArray: number[] = [];
  
  // An array to store the numbers found in the input string
  let tempArr: string[] = [];

  // The total sum of each item in the calibrationValueArray
  let totalSum: number = 0;

  for (let i = 0; i < giantString.length; i++) {
    // If the ASCII code at 'i' is between 48 and 57, push it into the temp array
    if (giantString.charCodeAt(i) >= 48 && giantString.charCodeAt(i) <= 57) {
      tempArr.push(giantString[i]);
    }
    
    // If at the last item in the giant string and there is a number in the temp array
    if (giantString[i+1] === undefined && tempArr.length) {
      // Concat that number together with itself, parse to an int and push into calibration value array
      calibrationValueArray.push(parseInt(tempArr[0].concat(tempArr[0])));
      // Empty the array
      tempArr.splice(0, tempArr.length);
    }

    // when the "-" is reached 
    if (giantString[i] === "-") {
      
      // when one item in the temp array
      if (tempArr.length === 1) {
        // concat together with itself, parse to an int, push into calibration value array
        calibrationValueArray.push(parseInt(tempArr[0].concat(tempArr[0])));
        // clear the temp array for next input string
        tempArr.splice(0, tempArr.length);  
      }
      
      // when there are two are more    
      if (tempArr.length >= 2) {
        // concat the first num and last num from temp array, cast to int, push into calibrationValueArray
        calibrationValueArray.push(parseInt(`${tempArr[0]}${tempArr[tempArr.length - 1]}`));
        // clear the temp array
        tempArr.splice(0, tempArr.length);
      }     
    
      // If there's only one element, clear the tempArr
      tempArr.splice(0, tempArr.length);
    }
  }

  // clear the temp arr for next input string
  tempArr.splice(0, tempArr.length);


  // Iterate over combined numbers and add them all together
  for (let i = 0; i < calibrationValueArray.length; i++) {
    totalSum += calibrationValueArray[i];
  }

  return totalSum;
}

function exec() {
  console.log(solution(inputArr));
}




