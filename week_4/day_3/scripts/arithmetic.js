function calculate() {
    let numberOne = Number(document.getElementById("numone").value);
    let numberTwo = Number(document.getElementById("numtwo").value);
    let operatorValue = document.getElementById("operator").value;
    let resultDisplay = document.getElementById("result");

    if (operatorValue == "Addition") {
        resultDisplay.innerText = numberOne + numberTwo;
        console.log("Addition");
    }else if (operatorValue == "Subtraction") {
        resultDisplay.innerText = numberOne - numberTwo;
        console.log("Subtraction");
    }else if (operatorValue == "Multiplication") {
        resultDisplay.innerText = numberOne * numberTwo;
        console.log("Multiplication");
    }else {
        console.log("Invalid operation");
    }
}