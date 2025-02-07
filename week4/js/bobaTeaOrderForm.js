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
    let toppingPrice = toppings.reduce((sum, topping) => sum + prices[topping], 0);
    let finalPrice = prices[size] * (basePrice + toppingPrice);
    return finalPrice;
}

function displayOrderSummary(order) {
    let toppingsList = order.toppings.length > 0 ? order.toppings.join(" ") : "None";
    console.log(`Your have ordered a ${order.size} ${order.flavor} with these toppings: ${toppingsList}`);
    console.log(`Total Price: $${order.finalPrice}`);
}

function placeOrder(flavor, size, toppings) {
    let finalPrice = calculateFinalPrice(flavor, size, toppings);
    let order = {
        flavor: flavor,
        size: size,
        toppings: toppings,
        finalPrice: finalPrice
    };
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
        orderSummary.innerText = `Selected Option: ${dropdown1.value, dropdown2.value}`;
    }
    
}