let result = Number("5")-2; // This will convert the string "5" to a number and then subtract 2. Instead of relying on implicit conversion, 
// we use Number() to ensure the string is treated as a number.
console.log("The result is: " + result);//theresult will be 3

let stringValue = true; // This is a boolean value (not a string). To avoid misleading results from Boolean("false"), 
// we use a direct comparison to check if the value is exactly equal to the string "true".
let isValid = (stringValue === "true");//this will come back true if stringValue is exactly "true", it's otherwise false.
if (isValid) {
    console.log("This is valid!");
}//runs on if isValid is true

let age = 25;//This is a clearly defined number representing age. It shouldn't be a string.
let totalAge = age + 5; //this is the clearly defined number representing age plus 5
console.log("Total Age: " + totalAge);//when we add age and totalAge we get 30.