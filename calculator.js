// Functions for math operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error! Zero se divide nahi ho sakta.";
    }
    return a / b;
}

// Calculator function jo decide karega kya karna hai
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid Operator!";
    }

    console.log(`Result: ${result}`);
}

// Calculator use karein
calculator(10, 5, '+'); // Output: Result: 15
calculator(20, 4, '/'); // Output: Result: 5