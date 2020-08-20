/**
 * Given two strings, the function determines if the 2nd string is an anagram of 1st string.
 * An anagram is a word, phrase or a name formed by rearranging the letters of another string.
 * For instance:
 * `cinema` and `iceman` is a valid anagram
 * 
 * E.g.
 * isValidAnagram('', '') // true
 * isValidAnagram('aaz', 'zza') // false
 * isValidAnagram('rat', 'car') // false
 * isValidAnagram('qwerty', 'qeywrt') // true 
 */
function isValidAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (const char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!lookup[char]) {
      return false;
    }
    lookup[char] -= 1;
  }
  return true;
}

const ret = isValidAnagram('texttwisttime', 'timetwisttext');
console.log(ret);