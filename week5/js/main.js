const radiusP = document.querySelector("#radius");
const resultP = document.querySelector("#result");

function getNumber() {
    let radius = prompt("Enter a number for a circle radius");
    radiusP.innerText += " "+radius;
    return radius;
}

function calculateArea() {
    const number = getNumber();
    console.log(number);
    // let's check if the number variable is numeric or not
    if (isNaN(number)) {
        return "Error: You entered invalid number";
    }
    else {
        return (Math.PI * Math.pow(number, 2)).toFixed(2);
    }
}

const result = calculateArea();
resultP.innerText += ": "+result;