// Union, Literal Types, Type Alias

// Type Alias

type Combinable = number | string; // alias used

function combine(num1: Combinable, num2: Combinable, conversionType: "as-number" | "as-string") {
    let result;
    if (typeof (num1) === 'number' && typeof (num2) === 'number' && conversionType === "as-number") {
        result = num1 + num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

const sum1 = combine(10, 20, "as-number"); // Used Literal Types
const sum2 = combine(40, 70, "as-string"); // Used Literal Types
const combineString = combine("Aman", " Parida", "as-string");
console.log(sum1, sum2, combineString);
