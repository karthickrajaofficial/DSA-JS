// 1. convert str to arr using split 
// 2. reverse array using reverse 
//3. convert arr to str using join
strs = ["lia","lisa","car","war"]

const reverseString = str => str.split('').reverse().join('')
// console.log(reverseString("lia"))

strs.forEach(str=>{
    console.log(reverseString(str))
})

// without built-in 
const reversestr = arr =>{ //we can use fn method to instead of arrow fn too
    let reversed = ''
    for(let i = arr.length-1 ;i >=0 ; i--){
        reversed += arr[i];
    }
   return reversed
}
console.log(reversestr("lia"))

let s = ["h","e","l","l","o"]
//Two pointers approach
let reverseStrings = (s) => {
    let left = 0;
    let right= s.length-1 
    while(left<right){
        //Swap
        [s[left],s[right]] = [s[right],s[left]]
        left ++;
        right --;

    }
};
reverseStrings(s)
console.log(s)

let resversestr = function(s){
    for (let left =0 ,right =s.length-1;left<right;left++,right--){
        [s[left],s[right]] = [s[right],s[left]]
    }
}
reversestr(s)
console.log(s)
