// O(n^2) the algorithm execution time grows quadratically with the size of input data (n)
//Comparision 

const findPairs =(arr) => {
    //O(n^2)
    for (let i=0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            console.log(`pair:${arr[i]},${arr[j]}`)
        }
    }
    //O(n)
    for(let q = 0 ; q <arr.length ; q++){
        console.log("-------",q) 
        // o/p 
        // [ '-------', 0 ] 
        // [ '-------', 1 ] 
        // [ '-------', 2 ] 
        // [ '-------', 3 ] 
        // [ '-------', 4 ] 
        // [ '-------', 5 ] 
        // [ '-------', 6 ]
    }
}
const Numbers = [1,2,3,4,5,6,7]
findPairs(Numbers)

//Nested loops O(n^2)
//single loop O(n)