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

// let shoppingItems = ["bread", "cheese", "green pepper"];
// //ur class = "shopping"
// //loop in the array
//     //create an li
//     //update the text of the li with the array item
//     //call append/appendChild on ul and pass the created li
// const shoppings = document.querySelector(".shopping");

// function populateShoppingList(shoppingListItems) {
//     console.log(shoppingListItems);
//     for (let i = 0; i < shoppingListItems.length; i++) {
//         const li = document.createElement("li");
//         li.innerText = shoppingListItems[i];
//         shoppings.appendChild(li);
//     }
// }
// populateShoppingList(shoppingItems);
// // shoppingItems.forEach(item => {
// //     const li = document.createElement("li");
// //     li.innerText = item;
// //     shoppings.appendChild(li);
// // })

// function changeListMarker() {
//     shoppings.setAttribute("class", "squareList");
// }

// changeListMarker();

// const button = document.querySelector("#updateImage");
// function changeButtonText() {
//     // will be called when user clickes the button
//     // change the text to clicked if it says "Click me"
//     if (button.innerText === "Click Me!"){
//         button.innerText = "Clicked";
//     }
//     else if (button.innerText === "Clicked") {
//         button.innerText = "Click Me!";
//     }
//     // if I wnat this to be called only one time
//     // button.removeEventListener("click", changeButtonText);
// }

// button.addEventListener("click", changeButtonText);

const buttonContainer = document.querySelector(".buttonContainer");

function changeButtonBGcolor(event) {
    console.log(event);
    if (event.target.nodeName === "BUTTON") {
        event.target.style.backgroundColor = event.target.innerText;
    }
    //which button had the mouse over it?
    
    //change the background color of the button based on its text
    
}

//setting the listener on the parent of the buttons
buttonContainer.addEventListener("mouseover", changeButtonBGcolor); 