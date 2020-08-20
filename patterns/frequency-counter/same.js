/**
 * Accepts two arrays. Function should return `true` if every value in the array has it's corresponding value squared
 * in the 2nd array. Frequency of values must be same
 * 
 * e.g.
 * 
 * same([1, 2, 3], [4, 1, 9]) // true
 * same([1, 2, 3], [1, 9]) // false
 * same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)
 */
function same(arr1, arr2) {
  const freqQ1 = {};
  const freqQ2 = {};
  for (const item of arr1) {
    freqQ1[item] = (freqQ1[item] || 0) + 1;
  }
  for (const item of arr2) {
    freqQ2[item] = (freqQ2[item] || 0) + 1;
  }
  for (const key of Object.keys(freqQ1)) {
    if (!(freqQ2.hasOwnProperty(key ** 2))) {
      return false;
    }
    if (freqQ2[key ** 2] !== freqQ1[key]) {
      return false;
    }
  }
  return true;
}

const ret = same([1, 2, 1], [4, 1, 1]);
console.log(ret);