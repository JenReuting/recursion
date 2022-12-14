/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
/** [apple, banana, cantaloupe, beet] */

function longest(words) {

  if (words.length === 0) return 0; //[]

  // const longestWord = words[0].length > longest(words.slice(1)) ? words[0].length : longest(words.slice(1));

  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {

  if (arr.length === 0) return false;

  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, str.length - 1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  if (str.length === 0) return "";

  return revString(str.slice(1)) + str[0];
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) return -1;

  if (arr[0] === val) return 0;

  return findIndex(arr.slice(1), val) === -1 ? -1 : 1 + findIndex(arr.slice(1), val);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const strArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strArr.push(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      strArr.push(...gatherStrings(obj[key]));
    }
  }
  return strArr;

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */


function binarySearch(arr, val) {

  if (arr.length === 0) return false;

  let median = Math.floor((arr.length - 1) / 2);

  if (arr[median] === val) return true;
  if (arr[median] > val) return binarySearch(arr.slice(0, median), val);
  if (arr[median] < val) return binarySearch(arr.slice(median + 1, arr.length), val);
}



/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
//ANSWER = 3
function binarySearchIndex(arr, val) {
  //ARR = [1, 2, 3, 4] VAL = 4
  //ARR = [3, 4]
  //ARR = [4]

  if (arr.length === 0) return -1;
  //false
  //false
  //false

  let min = 0;
  let max = arr.length - 1;
  //max = 4 - 1 = 3
  //max = 2 - 1 = 1
  //max = 1-1 = 0

  let median = Math.floor((min + max) / 2);
  //median = 1
  //median = 0
  //median = 0

  if (arr[median] === val) return 0;
  //is 2 === 4? false
  //is 3 === 4? false
  //is 4 === 4? true ===> return 0

  if (arr[median] > val) return median + binarySearch(arr.slice(0, median), val);
  // is 2 > 4 ? false
  // is 3 > 4 ? false

  if (arr[median] < val) return median + binarySearch(arr.slice(median + 1, arr.length), val);
  // is 2 < 4 ? true
  // is 3 < 4 ? true
}

////////// binarySearch([1], 1) ====> 0
//////////// binarySearch([1,2] 1) ====> return 1 + binarySearch([1], 1)

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
