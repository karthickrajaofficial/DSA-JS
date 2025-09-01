// fib [0,1,1,2,3,5,8] adding before element and giving result like 1+1 = 2 
//recursion
const fib = n =>{
    if (n<=1) return n
    return fib(n-1)+fib(n-2)
}
console.log(fib(13))

// =======================Method 2 ====================
const fib1 = n =>{
    const arr=[0,1]
    for(let i=2 ;i <=n;i++){
  arr.push(arr[i-1]+arr[i-2])
    }
    
    return arr[n]
}
console.log(fib1(13))


