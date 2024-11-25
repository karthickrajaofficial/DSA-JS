const IntReverse = arr => parseInt(arr.toString().split('').reverse().join(''))
console.log(IntReverse(123)) 

const IntReverse1 = num => {
    let reversed = 0;
    while (num > 0) {
        let lastDigit = num % 10; // Get the last digit
        reversed = reversed * 10 + lastDigit; // Shift reversed digits left and add last digit
        num = Math.floor(num / 10); // Remove the last digit from num
    }
    return reversed;
};

console.log(IntReverse1(123)); // Output: 321

const IntReverse2 = num => {
    let reversed = 0;
    for (; num !== 0;) {
        let lastDigit = num % 10; // Get the last digit
        reversed = reversed * 10 + lastDigit; // Shift reversed digits left and add last digit
        num = Math.floor(num / 10); // Remove the last digit from num
    }
    return reversed;
};

console.log(IntReverse2(153)); // Output: 321

