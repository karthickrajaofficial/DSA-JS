let str =madam
const Palindrome = str => +str.toString().split(' ').reverse().join(' ') === str
console.log(`Is "${str}" a palindrome? ${Palindrome(str)}`);
