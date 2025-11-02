// Unknown, Never, Any Types
console.log("-------Unknown, Never, Any Types-------");
var userInput;
// let userInput: any;
var userName = "Hello";
// userInput = 10;
// userName = userInput; // Can't assign Unknown
// However with 'any' it's possible
// userInput = 10;
// userName = userInput;
// console.log(userName);
// One way to do using unknown 
if (typeof (userInput) === 'string') {
    userName = userInput;
}
console.log(userName);
// Never return type
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateError("Internal Server Error", 500);
console.log(res);
