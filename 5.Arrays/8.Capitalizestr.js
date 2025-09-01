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

const capitalizeWords = str => 
    str.split(" ")
       .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
       .join(" ");

strsk.forEach(str => 
    console.log(capitalizeWords(str))
);



const capitalizeWords1 = (str) => {
    let result = "";
    let capitalizeNext = true;

    for (let char of str) {
        if (char === " ") {
            result += char;
            capitalizeNext = true; // Next letter should be uppercase
        } else if (capitalizeNext) {
            result += char.toUpperCase(); // Convert first letter to uppercase
            capitalizeNext = false;
        } else {
            result += char.toLowerCase(); // Convert other letters to lowercase
        }
    }

    return result;
};

for (let str of strsk) {
    console.log(capitalizeWords1(str));
}