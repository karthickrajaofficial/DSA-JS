// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
//  starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.
// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

var mergeAlternately = function(word1,word2){
let merged = "";
let i = 0;
let j = 0;
let len1 = word1.length
let len2 = word2.length

while (i<len1 || j<len2){
     if(i<len1) merged+=word1[i++]
     if(j<len1) merged+=word2[j++]
}
return merged

}
console.log(mergeAlternately("abc", "pqr"));

var mergeAlternately1 = (str1, str2) => {
     let merged = "";
     let maxLength = Math.max(str1.length, str2.length);
 
     for (let i = 0; i < maxLength; i++) {
         if (i < str1.length) merged += str1[i];
         if (i < str2.length) merged += str2[i];
     }
 
     return merged;
 };
 
 let str1 = "krishna";
 let str2 = "veni";
 
 console.log(mergeAlternately1(str1, str2)); // "kverisnhina"
 
