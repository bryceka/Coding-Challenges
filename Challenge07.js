//Make a function that does arithmetic using add, subtract, divide, or multiply operators
//https://www.codewars.com/kata/583f158ea20cfcbeb400000a/javascript

function arithmetic(a, b, operator) {
    if (operator == 'add') {
        return a + b
    } else if (operator == 'subtract') {
        return a - b
    } else if (operator == 'divide') {
        return a / b
    } else if (operator == 'multiply') {
        return a * b
    }
}
