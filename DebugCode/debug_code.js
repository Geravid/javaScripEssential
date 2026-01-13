    
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let results = arithmetic_operations(num1, num2);

        // Display the result
        displayResult(results);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function arithmetic_operations(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    let operations = [];

    operations.push(a + b);
    operations.push(a - b);
    operations.push(a * b);
    try {
        operations.push(a / b);
    } catch (error) {
        operations.push("div 0");
    }

    return operations
}

function displayResult(results) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    display_results = results.map((result) => `<p>The result is: ${result}</p>`).join('');
    resultElement.innerHTML = display_results
}
        