var removeElement = function(nums, val) {
  let i = 0;
  let n = nums.length;
    while(i < n){
    if (nums[i] === val){
            nums.splice(i,1);
            n--;
        } else {
            i ++
        }
        console.log(nums);
    }
    return n;
};