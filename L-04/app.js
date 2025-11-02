// Functions
console.log("----------FUNCTIONS---------");
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
function greet(name) {
    console.log("Hare Krishna ".concat(name, "!"));
}
greet("Aman Parida");
// Proper way to define Function
var combineFunction;
combineFunction = add;
console.log(combineFunction(70, 30));
// Function type & callbacks
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(20, 20, function (result) {
    console.log(result);
});
