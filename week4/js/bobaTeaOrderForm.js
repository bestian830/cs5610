const prices = {
    original : 2.5,
    mango : 3.0,
    strawberry: 3.5,
    small : 1.0,
    medium : 1.5,
    large : 2.0,
    boba : 0.5,
    jelly : 0.75,
    pudding : 1.0
}

function calculateFinalPrice(flavor, size, toppings) {
    let basePrice = prices[flavor];
    let toppingPrice = toppings.length > 0 ? toppings.reduce((sum, topping) => sum + (prices[topping] || 0), 0):0;
    let finalPrice = prices[size] * (basePrice + toppingPrice);
    finalPrice = Math.round(finalPrice * 100) /100;
    return finalPrice;
}

function displayOrderSummary(order) {
    // Get the paragraph element where the order summary should be displayed
    let summaryParagraph = document.querySelector("#order-summary");

    // Ensure toppings are displayed properly
    let toppingsList = order.toppings.length > 0 ? order.toppings.join(" ") : "None";

    // Construct the summary text
    let summaryText = `You have ordered a ${order.size} ${order.flavor} with these toppings: ${toppingsList}. Total Price: $${order.finalPrice}`;

    // Update the paragraph with the summary
    if (summaryParagraph) {
        summaryParagraph.innerText = summaryText;
    } else {
        console.error("Error: #order-summary element not found.");
    }
}

function placeOrder() {
    let flavor = document.querySelector("#flavor").value;
    let size = document.querySelector("#size").value;
    let toppings = Array.from(document.querySelector("#toppings").selectedOptions).map(option => option.value);

    // Ensure user has made valid selections before proceeding
    if (!flavor || !size) {
        alert("Please select both flavor and size before placing an order.");
        return;
    }

    // Calculate the final price
    let finalPrice = calculateFinalPrice(flavor, size, toppings);

    // Create order object
    let order = {
        flavor: flavor,
        size: size,
        toppings: toppings,
        finalPrice: finalPrice
    };

    // Display order summary
    displayOrderSummary(order);
}

function validateAndUpdateOrder() {
    let dropdown1 = document.querySelector("#flavor");
    let dropdown2 = document.querySelector("#size");
    let orderSummary = document.querySelector("#order-summary");

    if (!dropdown1.value || !dropdown2.value) {
        alert("Please select an option from both flavor and size before proceeding.");
        return;
    }

    // Update order summary if both dropdowns have valid selections
    if (orderSummary) {
        orderSummary.innerText = `Selected Option: ${dropdown1.value}, ${dropdown2.value}`;
    }
}

document.querySelector("#btn").addEventListener("click", function(event) {
    event.preventDefault();
    placeOrder();
});