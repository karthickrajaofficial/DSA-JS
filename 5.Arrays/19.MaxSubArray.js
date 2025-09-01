// Given an integer array nums find the sub array with the largest sum and retuns its sum
// input [5,4,-1,7,8] op : 23

const maxSubArray = (nums) => {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
};
console.log(maxSubArray([5, 4, -1, 7, 8])); //23

// =================kadanes Algoritham ===============

const maxSubArray1 = nums =>{
 let sum =0 ;
 let max =0;
 for (let i = 0 ;i< nums.length;i++){
    sum += nums[i]
    if(sum>=max){
        max = sum
    } if(sum <=0 ){
        sum =0 
    }
 }
 return max 
}

console.log(maxSubArray1([5, 4, -1, 7, 8])); //23
 // time = O(n)
 //space =O(1)
