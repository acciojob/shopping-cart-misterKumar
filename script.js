// Constants for DOM elements
const itemNameInput = document.getElementById("item-name-input");
const itemPriceInput = document.getElementById("item-price-input");
const addButton = document.getElementById("add");
const shoppingList = document.getElementById("shopping-list").getElementsByTagName("tbody")[0];
const totalElement = document.getElementById("total");

// Initialize the grand total
let grandTotal = 0;

// Function to add an item to the shopping list
function addItem() {
  const itemName = itemNameInput.value.trim();
  const itemPrice = parseFloat(itemPriceInput.value);

  // Validate input
  if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Please enter a valid item name and price.");
    return;
  }

  // Create a new row in the table
  const newRow = shoppingList.insertRow();
  const itemCell = newRow.insertCell(0);
  const priceCell = newRow.insertCell(1);

  // Set the item and price for the new row
  itemCell.textContent = itemName;
  priceCell.textContent = "$" + itemPrice.toFixed(2);

  // Update the grand total
  grandTotal += itemPrice;

  // Clear input fields
  itemNameInput.value = "";
  itemPriceInput.value = "";

  // Update the total element
  totalElement.textContent = "Grand Total: $" + grandTotal.toFixed(2);
}

// Add click event listener to the "Add" button
addButton.addEventListener("click", addItem);