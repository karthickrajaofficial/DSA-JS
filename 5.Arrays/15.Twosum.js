let Twosum = (nums,target)=>{
    let map = new Map();
    for(i=0;i<nums.length;i++){
      let soln = target - nums[i]
      if (map.has(soln)){
             return[map.get(soln),i]
      }map.set(nums[i],i)
    }
    return[]
}
console.log(Twosum([2,7,11,15],9))

// ===================solution2==================
const array = [2,7,8,3,6,9]


let Twosum1 = (nums,target)=>{
   let map = new Map()
   for(let i=0;i<nums.length;i++){
    let soln = target-nums[i]
    if(map.has(soln)){
        return[map.get(soln),i]
    } map.set(nums[i],i)
   }return[]
}
console.log (Twosum1(array,9))