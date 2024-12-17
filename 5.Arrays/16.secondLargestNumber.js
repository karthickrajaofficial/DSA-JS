//SecondLargestNumber 
// given an array size of N print 2nd largest distinct element from array 
// input : [12,35,1,10,34,1] op: 34
// input : [10,5,10] op: 5

function SecondLargestNumber(arr){
//    const uniqueArray = (new Set(arr))
//    console.log(uniqueArray) //Set { 0: 12, 1: 35, 2: 1, 3: 10, 4: 34 }
//    to convert obj to array we use Array.from()
   const uniqueArray = Array.from(new Set(arr)) //O(n)
   console.log(uniqueArray) //[ 12, 35, 1, 10, 34 ]
   uniqueArray.sort((a,b)=> b-a)// O(log n)
   console.log(uniqueArray) //[ 35, 34, 12, 10, 1 ]
   // Use a ternary operator to check if there are at least 2 unique elements
    // If so, return the second largest (uniqueArray[1]), otherwise return -1
   return uniqueArray.length >= 2 ? uniqueArray[1] : -1;
  
} 
// O(log n)
console.log(SecondLargestNumber([12,35,1,10,34,1])) //34
console.log(SecondLargestNumber([10,5,10])) //5

let secondlargestno = arr =>{
   let largeno =arr[0]
   for (let i = 1; i < arr.length; i++) {
       if (arr[i] > largeno) {
         largeno = arr[i]; 
       }
     }
     let sec = -Infinity
     for(let j = 0 ;j <arr.length;j++){
       if( arr[j] < largeno){
           sec = arr[j]
       }
     }
     return sec
}
let arr =[1,2,3,4,7,80,8,70]

console.log(secondlargestno(arr))