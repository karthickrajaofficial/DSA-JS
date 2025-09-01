let str =121
const Palindrome = str => +str.toString().split(' ').reverse().join(' ') === str
console.log(`Is "${str}" a palindrome? ${Palindrome(str)}`);


const isPalindrome = str => {
    const checkPalindrome = (left, right) => {
      if (left >= right) return true; // Base case
      if (str[left] !== str[right]) return false; // Mismatch case
      return checkPalindrome(left + 1, right - 1); // Recursive call
    };
    return checkPalindrome(0, str.length - 1); // Initial call
  };
  
  // Usage example
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello"));   // false
  