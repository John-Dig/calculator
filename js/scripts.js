/* function saySomehting(whatToSay){
    window.alert(whatToSay);
}

function add(number1, number2) {
    return number1 + number2;
}
saySomehting("hi");

saySomehting(`The sum is ${add(3,5)}.`);
*/

//business logic
function add(number1, number2) {
    return `${number1} plus ${number2} is ${number1 + number2}`;
}
function subtract(number1, number2){
    return number1 + " minus " + number2 + " equals " + (number1 - number2);
}
function multiply(number1, number2) {
    return number1 + " times " + number2 + " is " + (number1 * number2);
}
function divide(number1, number2){
    return `${number1} divided by ${number2} is ${number1 / number2}`;
}


//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));


window.alert(divide(number1, number2));



