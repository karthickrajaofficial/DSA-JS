const FizzBuzz = n =>{
    for (let i= 1; i<=n ;i++){
        if (i% 3 ===0 && i%5 ===0){
            console.log("Fizz Buzz")
        }else if(i%3 === 0){
            console.log("Fizz")
        }
        else if(i%5===0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
        
    }
}
FizzBuzz(5)


const FizzBuzz1 = n => {
    for (let i = 1; i <= n; i++) {
        let output = ""; // Initialize an empty string to hold "Fizz", "Buzz", or "FizzBuzz"
        
        // Check divisibility by 3 and append "Fizz" if true
        if (i % 3 === 0) output += "Fizz1";
        
        // Check divisibility by 5 and append "Buzz" if true
        if (i % 5 === 0) output += "Buzz1";
        
        // Log the result: if output is non-empty, it logs "Fizz", "Buzz", or "FizzBuzz";
        // otherwise, it logs the number itself
        console.log(output || i); 

        // Benefits:
        // 1. Cleaner Code: String concatenation reduces the need for multiple conditions.
        // 2. Readable: Easier to extend (e.g., for additional rules like "FizzBuzzBazz").
        // 3. Efficient: Maintains O(n) time complexity with O(1) space complexity.
    }
}

FizzBuzz1(15);
