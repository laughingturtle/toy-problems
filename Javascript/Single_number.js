/**
 * @param {number[]} nums
 * @return {number}
 *

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

 */
var singleNumber = function(nums) {
  var obj = {};
  var result = '';

  for(var i = 0; i < nums.length; i++){
      /*
      does it exist in the obj? if no add it, if yes increment it
      */
      if(!obj.hasOwnProperty(nums[i])){
          obj[nums[i]] = 1;
      } else {
          obj[nums[i]] = obj[nums[i]] + 1;
      }

  }

  console.log('obj:', obj);

  for (var i in obj) {
      if (obj[i] === 1) {
        result = i;
      }
    }

  console.log('result', result)


  return result;
};