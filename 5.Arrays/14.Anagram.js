// anagram having same letters of words with same length

const anagram = (s,t) =>{
   if(s.length !== t.length) return false 
   return s.toString().split('').sort().join("") === 
   t.toString().split('').sort().join("") 
}

console.log(anagram("car","arc"))
console.log(anagram(123, 321));

// ---------------------in array-------------
const array = ["nuc","arc"]
 const anagram1 = (s,t) => {
   if(s.length !== t.length) return false
   return s.toString().split('').sort().join('') === t.toString().split('').sort().join('')
 }
 const s = array[0];
const t = array[1];
 console.log(anagram1(s,t))
 console.log(`The words "${s}" and "${t}" are anagrams: ${anagram1(s, t)}`);

 // ---------------solution2 -----------------
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;

  let obj1 = {}
  let obj2 = {}

  for(let i = 0; i<s.length ;i++ ){
      obj1[s[i]] = (obj1[s[i]] || 0) + 1
      obj2[t[i]] =  (obj2[t[i]] || 0) + 1

  }
  for (const key in obj1){
      if(obj1[key] !== obj2[key] ) return false;
  }
  return true
}
console.log( isAnagram("rat","tar")) //true

// -----------------solution3----------------
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false; // If lengths are different, they can't be anagrams

  let obj = {};

  // Count the frequency of characters in string `s`
  for (let i = 0; i < s.length; i++) {
      obj[s[i]] = (obj[s[i]] || 0) + 1;
      obj[t[i]] = (obj[t[i]] || 0) - 1;
  }

  // If all values are 0, it's an anagram
  for (const key in obj) {
      if (obj[key] !== 0) return false;
  }

  return true;
};

console.log(isAnagram("rat", "tar")); // true
console.log(isAnagram("hello", "world")); // false
