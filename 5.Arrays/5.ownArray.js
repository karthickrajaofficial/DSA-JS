class MyArray {
    constructor() {
        this.length = 0; // Initialize length to 0
        this.data = {}; // Use an object to store elements
    }

    // Method to add a new element to the array
    push(item) {
        this.data[this.length] = item; // Add the item at the current length index
        this.length++; // Increment the length
        return this.length; // Return the new length
    }
}

const myNewArray = new MyArray();
console.log(myNewArray.push('apple')); // Output: 1
console.log(myNewArray); // To see the internal state of myNewArray
