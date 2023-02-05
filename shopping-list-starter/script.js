// let shoppingListItems = ["milk", "eggs", "bread"]


let shoppingListItems = []

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    console.log(shoppingListItems);
    updateItems()
} // this takes the item in the new item text box and adds it to the shopping list items list

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        // console.log(item)
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    }); // for each item in shopping list item display on page as lsit?
}

// function deleteItems() {
//     let listElement = document.getElementById("shopping-list-items");
//     listElement.innerHTML = "";
//     shoppingListItems.forEach((item) => {
//         // console.log(item)
//         let itemElement = document.deleteElement("li");
//         itemElement.innerText = item;
//         listElement.appendChild(itemElement);
//     });
// }

function deleteItems() {
    shoppingListItems = [];
    updateItems()
}




