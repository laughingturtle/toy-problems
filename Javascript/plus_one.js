/**
 * @param {number[]} digits
 * @return {number[]}
 *

 Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

 */

var plusOne = function(digits) {
  /*
  turn numbers to a string, then to a number, add one,
  back to string, push each digit to array.
  */
  var str = '';
  for(let i = 0; i < digits.length; i++){
      str += digits[i];
  }
  console.log('type:', typeof str);
  console.log('s', str)
  var num = BigInt(str, 10);
  console.log('n', num);
  console.log('type', typeof num);
  num = BigInt(num) + BigInt(1);
  console.log('a: ', num);
  var newStr = num.toString();
  console.log('New string', newStr);
  console.log(typeof newStr);
  var arr = newStr.split('');
  console.log('new ', arr);
  return arr;
  /*

  let result = str to array '' parseInt
  return result;
  */

};