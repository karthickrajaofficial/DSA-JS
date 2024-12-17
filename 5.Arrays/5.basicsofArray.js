class MyArray {
    constructor() {
        this.length = 0; // Initialize length to 0
        this.data = {}; // Use an object to store elements
    }

    // Method to add a new element to the array
    push(item) {
        this.data[this.length] = item; // Add the item at the current length index
        this.length++; // Increment the length
        return this.length; // Return the new length
    }
}

const myNewArray = new MyArray();
console.log(myNewArray.push('apple')); // Output: 1
console.log(myNewArray); // To see the internal state of myNewArray



//Array declaration 


let person ={
    name:"karthick",
    age:23
}
let arr =["apple","orange","cherry",person]
console.log(arr.length) //op:4
//Add remove elements

arr.push("kia") //Adding last 
console.log(arr) 
//[ 'apple', 'orange', 'cherry', { name: 'karthick', age: 23 }, 'kia' ]

arr.pop() //remove last
console.log(arr)
//[ 'apple', 'orange', 'cherry', { name: 'karthick', age: 23 } ]

arr.unshift("banana") //add 1st
console.log(arr)
//[ 'banana', 'apple', 'orange', 'cherry', { name: 'karthick', age: 23 } ]

arr.shift() //remove 1st
console.log(arr)
//[ 'apple', 'orange', 'cherry', { name: 'karthick', age: 23 } ]

//Loops in array 
for(let i =0 ;i<arr.length;i++){
    console.log(arr[i])
}

// 'apple' 
// 'orange' 
// 'cherry' 
// { name: 'karthick', age: 23 }

let i = 0 ;
while(i<arr.length){
    console.log(arr[i])
i++
}
// 'apple' 
// 'orange' 
// 'cherry' 
// { name: 'karthick', age: 23 }

//inbuilt Loop Methods 
const numbers = [1,2,3,4,5,6,7]

const newNumbers = numbers.map((item,index,array)=>{
    return item+5
})
console.log(newNumbers)
//Array(7) [ 6, 7, 8, 9, 10, 11, 12 ]
 
const filter = numbers.filter((item,index,array)=>{
    return item > 3;
})
console.log(filter)
//[ 4, 5, 6, 7 ]

const sum = numbers.reduce((prev,item)=>{
    return prev+item
},0)
console.log(sum) //28

const some = numbers.some((item,index,array)=>{
    return item > 3;
})
console.log(some) //true

const every = numbers.some((item,index,array)=>{
    return item > 100;
})
console.log(every) //false it does not have above 100 so it false

const find = numbers.find((item,index,array)=>{
    return item > 3;
})
console.log(find) //4 is 1st element so it returns it

//Spread & Rest operator 
const num1 =[1,2,3,4]
const num2 =[5,6,7,8,9]

const Finalnum =[num1,num2]
console.log(Finalnum) //[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8, 9 ] ]

const spread = [...num1,...num2]
console.log(spread) //Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const rest = (...newnos) =>{
    return newnos
}
console.log(rest(num1,num2,"karthick"))
//[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8, 9 ], 'karthick' ] return all params

//concat 
const concatarr = num1.concat(num2)
console.log(concatarr) //Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//Slice used to extract a shallow copy of a portion of an array without modifying the original array
const newarr = ["car","bike","cycle"]
const Slicearr = newarr.slice(0,2)
console.log(Slicearr) //[ 'car', 'bike' ]

//splice modifies array
const newarr1 = ["bus","pulser","cycle"]
const Splicearr = newarr1.splice(1,2,"flight")
console.log(Splicearr) //[ 'pulser', 'cycle' ]
console.log(newarr1); // [ 'bus', 'flight' ]

//fill
const dummyarr = [5,8,9,89,65,7]
dummyarr.fill(2,2)
console.log(dummyarr) //Array(6) [ 5, 8, 2, 2, 2, 2 ]

const findarr = [5,8,9,89,65,7]
const index = findarr.findIndex((item)=>item ===5)
console.log(index) //0

//Flat 
const flatarr =[1,[2,3],[4,5,6,[4,5,6],3],8,6]
const flattenarr = flatarr.flat(2)
console.log(flattenarr) //Array(12) [ 1, 2, 3, 4, 5, 6, 4, 5, 6, 3, 8, 6 ]

//reverse
const numsreverse = [5,8,9,89,65,7]
numsreverse.reverse()
console.log(numsreverse) //Array(6) [ 7, 65, 89, 9, 8, 5 ]

const nums = [5, 8, 9, 89, 65, 7];

// Create a copy of the array before sorting in ascending order
const sortarrAssending = [...nums].sort((a, b) => a - b);

// Create a copy of the array before sorting in descending order
const sortarrDesending = [...nums].sort((a, b) => b - a);

console.log(sortarrAssending);  // [5, 7, 8, 9, 65, 89]
console.log(sortarrDesending);  // [89, 65, 9, 8, 7, 5]

