
const itemNameInput = document.getElementById("item-name-input");
const itemPriceInput = document.getElementById("item-price-input");
const shoppingList = document.getElementById("item-qty-input");
const total = document.getElementById('total');

let i = 0;
let priceArray=0;
function handleClick() {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseInt(itemPriceInput.value);

    // Check for valid inputs
    if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
        alert("Invalid input. Please enter a valid item name and price.");
        return;
    }

    // Add the item to the shopping list
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${itemName}</td>
            <td>${itemPrice} </td>
        `
    
    shoppingList.appendChild(row);

    priceArray += itemPrice;

    total.innerText = priceArray;
    
    itemNameInput.value = "";
    itemPriceInput.value = "";
}