// Rotate array by K steps right where K is non negetive

const rotateArr = (nums,k) =>{
   let size = nums.length 
   if(k>size){
    k = k % size 
   } const rotated = nums.splice(size -k,size)
   nums.unshift(...rotated)
   return nums
}
console.log(rotateArr([ 1, 2, 3, 4, 7, 80, 8, 70  ],2)) //Array(8) [ 8, 70, 1, 2, 3, 4, 7, 80 ]

// ==========================solution 2 ======================

const rotateArray = (nums,k)=>{
   let size = nums.length 

    if(k>size){
        k = k % size 
       }
       reverse(nums,0,nums.length-1)
       reverse(nums,0,k-1)
       reverse(nums,k,nums.length-1)
       return nums
}
const reverse = (nums,left,right) =>{
    while(left < right ){
        const temp = nums[left]
        nums[left++] = nums[right]
        nums[right--] =temp
    }
}
console.log(rotateArray ([ 1, 2, 3, 4, 7, 80, 8, 70  ],2)) //Array(8) [ 8, 70, 1, 2, 3, 4, 7, 80 ]
