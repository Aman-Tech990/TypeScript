// Union, Literal Types, Type Alias
function combine(num1, num2, conversionType) {
    var result;
    if (typeof (num1) === 'number' && typeof (num2) === 'number' && conversionType === "as-number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine(10, 20, "as-number"); // Used Literal Types
var sum2 = combine(40, 70, "as-string"); // Used Literal Types
var combineString = combine("Aman", " Parida", "as-string");
console.log(sum1, sum2, combineString);
var user = {
    name: "Krishna",
    age: 16,
    skills: ["all-pervading"]
};
function greet(user) {
    console.log("Hi, I am ".concat(user.skills));
}
greet(user);
