const chunk = (array,size) => {
    const chunked = [ ]
    let index = 0 
    while (index  < array.length){
       const chunk = array.slice(index,index + size)
       console.log("---------",chunk)
       chunked.push(chunk)
      index += size
    }
    return chunked
}
const array = [1,2,7,4,5,6,7,8]
console.log(chunk(array,2))

