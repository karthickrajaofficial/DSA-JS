const Captialize = str => {
    return str.toLowerCase().split(" ").map((word)=> word[0].toUpperCase()+ word.slice(1)).join(" ")
}
console.log(Captialize("karthick dev"))

let strs1 = ["rUbaN karthick", "computer", "developer"];
 
const Captialize1 = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
strs1.forEach(str =>{
    console.log(`${Captialize1(str)}`)
})
let strs2 = ["rUbaN karth", "computer", "developer"];

const Capitalize2 = str => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

strs2.forEach(str => {
    console.log(Capitalize2(str));
});



let strsk = ["rUbaN karthick", "computer", "developer"];

let Captialize1st = str => {
  return str.split(" ").map(word => word.charAt(0).toUpperCase()
  +word.slice(1).toLowerCase()).join(" ")
}
strsk.forEach(str =>{
    console.log(Captialize1st(str))
})
