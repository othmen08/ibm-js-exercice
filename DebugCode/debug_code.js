function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
       // Perform the operation
       let result =  multiply(num1, num2);
       // Display the result
       displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
// When the debugger statement is encountered in your code and the browser's developer tools are open, it will:
// Pause execution of your JavaScript
// Activate the debugger (if available)
// Allow you to inspect variables, step through code, etc.

// When to Use It
// When you need to inspect variables at a specific point in execution

// To understand the flow of complex code

// When debugging issues that are hard to reproduce

// As a temporary debugging aid during development

// Remember to remove debugger statements before deploying your code to production!
     debugger;
     return a * b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is:${result}`;
}