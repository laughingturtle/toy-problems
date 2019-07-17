/**
 * Leetcode 771
 *
 * @param {string} J
 * @param {string} S
 * @return {number}

 You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.


 */


var numJewelsInStones = function(J, S) {
  /*


  */
  var tot = 0;
  // console.log(J.length);
  // console.log(S.length);
  // console.log(J.charAt(1));

  for(var i = 0; i < J.length; i++){
      console.log('J', J.charAt(i));
      for(var k = 0; k < S.length; k++){
          console.log('S', S.charAt(k));

          if(J.charAt(i) === S.charAt(k)){
              tot++;
              console.log('tot', tot)
          }
      }
  }
  return tot;
};