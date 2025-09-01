// Subsets {backtracking Algorithm using Recursion}
//Give an integer array nums of unique elements,return all possible subsets (the power set),
//The solution set must not contain dublicate subsets ,Return the solution in any order 

//Input : [1,2,3] ->>> op : [[],[1],[2],[1,2],[3],]


function Subsets(nums){
    let result = [];
    let temp =[];

    function recursiveSubsets(nums,i){
          if(i === nums.length){
            return result.push([...temp])
          }
       temp.push(nums[i]);
       recursiveSubsets(nums,i+1)
       temp.pop();
       recursiveSubsets(nums,i+1)

    }
    recursiveSubsets(nums,0)
    return result
}
console.log(Subsets([1,2,3]))
console.log(Subsets([1,2]))

//Array(8) [ [ 1, 2, 3 ], [ 1, 2 ], [ 1, 3 ], [ 1 ], [ 2, 3 ], [ 2 ], [ 3 ], [] ]