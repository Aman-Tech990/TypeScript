// Union, Literal Types, Type Alias

// UNION

function combine(num1: number | string, num2: number | string) {
    let result;
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        result = num1 + num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

let sum = combine(10, 20);
let combineString = combine("\tAman", " Parida");
console.log(sum, combineString);
