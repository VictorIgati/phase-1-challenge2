const addItemForm = document.getElementById('add-item-form');
const itemInput = document.getElementById('item-input');
const shoppingList = document.getElementById('shopping-list');
const clearListButton = document.getElementById('clear-list');

// Array to store shopping list items
let items = [];

// Function to add an item to the list
function addItem(item) {
    items.push(item);
    renderList();
}

// Function to mark an item as purchased
function markItemAsPurchased(index) {
    items[index].purchased = true;
    renderList();
}

// Function to clear the list
function clearList() {
    items = [];
    renderList();
}

// Function to render the shopping list
function renderList() {
    shoppingList.innerHTML = '';

    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;

        if (item.purchased) {
            listItem.classList.add('purchased');
        }

        const purchaseButton = document.createElement('button');
        purchaseButton.textContent = 'Mark Purchased';
        purchaseButton.addEventListener('click', () => markItemAsPurchased(index));

        listItem.appendChild(purchaseButton);
        shoppingList.appendChild(listItem);
    });
}

// Event listener for the "Add" button
addItemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemName = itemInput.value.trim();
    if (itemName !== '') {
        addItem({ name: itemName, purchased: false });
        itemInput.value = '';
    }
});

// Event listener for the "Clear List" button
clearListButton.addEventListener('click', clearList);

// Initial render of the list
renderList();