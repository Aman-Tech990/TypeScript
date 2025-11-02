// Union, Literal Types, Type Alias
// UNION
function combine(num1, num2) {
    var result;
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum = combine(10, 20);
var combineString = combine("\tAman", " Parida");
console.log(sum, combineString);
