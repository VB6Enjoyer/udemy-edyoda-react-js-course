const calculator = document.getElementById("calculator-text");
let justCalculated = false;

calculator.addEventListener("keydown", function (e) {
    if (justCalculated) {
        clearCalculator();
        justCalculated = false;
    }

    if (e.key == "Enter") {
        doTheMath();
    }
});

function writeOnCalculator(value) {
    if (justCalculated) {
        clearCalculator();
        justCalculated = false;
    }

    calculator.value += value;
}

function clearCalculator() {
    calculator.value = "";
}

function keyPressed(key) {

}

function doTheMath() {
    try {
        calculator.value = eval(calculator.value);
    } catch {
        calculator.value = "Syntax Error";
    }
    justCalculated = true;
}