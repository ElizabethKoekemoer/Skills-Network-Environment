function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value; // e.g., "add", "multiply", "divide"

    // Check if inputs are valid numbers - addition, multiplication, and division
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result;
        if (operation === "add") {
            result = addition(num1, num2);
        } else if (operation === "multiply") {
            result = multiply(num1, num2);
        } else if (operation === "divide") {
            result = division(num1, num2);
        } else {
            result = "Invalid operation";
        }
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}
function multiply(a, b) {
    //Introduce a debugger statement to pause execution
    debugger;

    //Multiply the numbers
    return a * b;
}

function addition(a, b) {     //Practise task
    //Introduce a debugger statement to pause execution
    debugger;

    //adding the numbers
    return a + b;
}

function division(a, b) {  //Practise task
    //Introduce a debugger statement to pause execution
    debugger;

    //adding the numbers
    return a / b;
}

function displayResult(result) {
    //Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `the result is: ${result}`;
}