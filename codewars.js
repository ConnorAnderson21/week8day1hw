// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
    if (bool === true) {
        return "Yes";
    } else {
        return "No";
    }
}

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0;
  
    arr.forEach(num => {
      if (num > 0) {
        sum += num;
      }
    });
  
    return sum;
  }
  