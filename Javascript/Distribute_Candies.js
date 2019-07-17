/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}

We distribute some number of candies, to a row of n = num_people people in the following way:

We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

Return an array (of length num_people and sum candies) that represents the final distribution of candies.



Example 1:

Input: candies = 7, num_people = 4
Output: [1,2,3,1]
Explanation:
On the first turn, ans[0] += 1, and the array is [1,0,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0,0].
On the third turn, ans[2] += 3, and the array is [1,2,3,0].
On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].
Example 2:

Input: candies = 10, num_people = 3
Output: [5,2,3]
Explanation:
On the first turn, ans[0] += 1, and the array is [1,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0].
On the third turn, ans[2] += 3, and the array is [1,2,3].
On the fourth turn, ans[0] += 4, and the final array is [5,2,3].

*/

var distributeCandies = function(candies, num_people) {
  var arr = [];
  var candies_left = candies;

  var n = 1;  // candies_given
  var queue_place = 0;
  var round = 1


  while(candies_left > 0){
      //console.log('candies_left: ', candies_left)
      //console.log('queue_place: ', queue_place);
      //console.log('n: ', n);
      if(queue_place === num_people){
          queue_place = 0;
          round++;
      }
      console.log('candies_left - last', candies_left);
      if(round > 1){
          // get current candies and add to them
          var curr = arr[queue_place];
          //console.log('curr', curr);
          if(candies_left < n){
              arr.splice(queue_place, 1, candies_left + curr);
          } else {
              arr.splice(queue_place, 1, n + curr);
          }
          //console.log('updated value: ', arr[queue_place])

      } else {
          if(n < candies_left){
              arr.push(n);
           //   console.log('ok');
          } else {
           //   console.log('HERE!');
              arr.push(candies_left);
          }
      }
      //console.log(arr);
      queue_place++;
      candies_left = candies_left -n;
      n++;
  }
  console.log(candies_left, round, queue_place, num_people)
  if(candies_left < 1 && round === 1 && queue_place < num_people){
      var pad_zeros = num_people - queue_place;
      console.log('zeros: ', pad_zeros);
      for(var i = 0; i < pad_zeros; i++){
          //console.log('add a zero');
          arr.push(0);
      }
  }
  return arr;
};