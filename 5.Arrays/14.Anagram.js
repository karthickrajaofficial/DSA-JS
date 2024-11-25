// anagram having same letters of words with same length

const anagram = (s,t) =>{
   if(s.length !== t.length) return false 
   return s.toString().split('').sort().join("") === 
   t.toString().split('').sort().join("") 
}

console.log(anagram("car","arc"))
console.log(anagram(123, 321));


const array = ["nuc","arc"]
 const anagram1 = (s,t) => {
   if(s.length !== t.length) return false
   return s.toString().split('').sort().join('') === t.toString().split('').sort().join('')
 }
 const s = array[0];
const t = array[1];
 console.log(anagram1(s,t))
 console.log(`The words "${s}" and "${t}" are anagrams: ${anagram1(s, t)}`);