/**
 * @param {number[][]} A
 * @return {number[][]}
 *
 *

Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.



Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]


 */
var transpose = function(A) {    var arr = [];

  for(var i=0; i< A[0].length; i++){
      var temp = [];
      for(var j=0; j< A.length; j++){
          temp.push(A[j][i]);
      }
      arr.push(temp);
  }
  console.log('new arr: ', arr);

  return arr;

};