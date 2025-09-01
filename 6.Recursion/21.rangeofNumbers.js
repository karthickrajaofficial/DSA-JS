const rangeofNumbers = (start,end) =>{
    if (end<start){
        return []
    } else {
        const numbers = rangeofNumbers(start,end-1)
        numbers.push(end)
        return numbers
    }
}
console.log(rangeofNumbers(0,5)) //Array(6) [ 0, 1, 2, 3, 4, 5 ]