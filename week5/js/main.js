// const radiusP = document.querySelector("#radius");
// const resultP = document.querySelector("#result");

// function getNumber() {
//     let radius = prompt("Enter a number for a circle radius");
//     radiusP.innerText += " "+radius;
//     return radius;
// }

// function calculateArea() {
//     const number = getNumber();
//     console.log(number);
//     // let's check if the number variable is numeric or not
//     if (isNaN(number)) {
//         return "Error: You entered invalid number";
//     }
//     else {
//         return (Math.PI * Math.pow(number, 2)).toFixed(2);
//     }
// }

// const result = calculateArea();
// resultP.innerText += ": "+result;

let shoppingItems = ["bread", "cheese", "green pepper"];
//ur class = "shopping"
//loop in the array
    //create an li
    //update the text of the li with the array item
    //call append/appendChild on ul and pass the created li
const shoppings = document.querySelector(".shopping");

function populateShoppingList(shoppingListItems) {
    console.log(shoppingListItems);
    for (let i = 0; i < shoppingListItems.length; i++) {
        const li = document.createElement("li");
        li.innerText = shoppingListItems[i];
        shoppings.appendChild(li);
    }
}
populateShoppingList(shoppingItems);
// shoppingItems.forEach(item => {
//     const li = document.createElement("li");
//     li.innerText = item;
//     shoppings.appendChild(li);
// })

function changeListMarker() {
    shoppings.setAttribute("class", "squareList");
}

changeListMarker();
