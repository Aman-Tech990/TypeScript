// Functions
console.log("----------FUNCTIONS---------");

function add(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(add(10, 20));

function greet(name: String): void {
    console.log(`Hare Krishna ${name}!`);
}
greet("Aman Parida");

// Proper way to define Function
let combineFunction: (a: number, b: number) => number;
combineFunction = add;
console.log(combineFunction(70, 30));

// Function type & callbacks
function addHandle(num1: number, num2: number, cb: (n: number) => void) {
    const result = num1 + num2;
    cb(result);
}

addHandle(20, 20, (result: number) => {
    console.log(result);
});