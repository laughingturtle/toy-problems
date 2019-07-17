/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 *
 A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.

 */
var selfDividingNumbers = function(left, right) {
  var arr = [];
  var sdn = true;

  for(var i = left; i <= right; i++){
      var str = String(i);
      var len = str.length;

      for(var j = 0; j < len; j++){
          var temp = str.charAt(j);
          var parsed = parseInt(temp);

         // console.log('i', i);
         // console.log('i', typeof i);
         // console.log('parsed j', parsed)
         // console.log('parsed j', typeof parsed)
         // console.log('sum: ', i % parsed);

          if(i % parsed !== 0 || parsed === 0){
              sdn = false;
          } else if(sdn === true && j === len-1){
              arr.push(i);
          }
      }
      sdn = true;
  }
  return arr;
};