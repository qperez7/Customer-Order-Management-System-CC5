// Task 1: Create an Inventory Array of Product
const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 },
    { name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 },
    { name: 'Mocha', price: 5, quantity: 4 }
    ];
    console.log(inventory); // Output: logs the inventory array

// Task 2: Create an Orders Array of Order Objects
const orders = []

console.log(orders);// Output: An empty array of orders

// Task 3: Create a Function to Place an Order
var itemsOrdered = [
    {name: "Expresso",price:3,quantity:3},
]

function placeOrder(customerName,itemsOrdered) {
if(itemsOrdered.some(item => inventory.name === itemsOrdered.name))
    return {
        customerName,
        itemsOrdered,
        status: "Pending"
        }
else 
return {itemsOrdered:"error item not found"}
}   
let updateitemsOrdered =  inventory[0].quantity - itemsOrdered[0].quantity
inventory.push(updateitemsOrdered)
console.log(orders.push(placeOrder("Alice",itemsOrdered))); // Output: places order in order array

//Task 4: Create a Function to Calculate Total for an Order
function calculateOrderTotal() {
let total = itemsOrdered.reduce((i,price) => i + price,0)
return total;
}
var itemsOrdered = [3,3,3]
 
console.log(calculateOrderTotal(`total price: $${itemsOrdered}`)); // Output: Calculates totals for items ordered


//Task 5: Create a Function to Mark an Order as Completed
function completeOrder(Name) {
  if(orders.find( order => order.customerName === Name))
    return {Name,status: "Completed"}
  else
  return {customerName:"Order is not found"}
};
console.log(completeOrder('Alice'));// Output: Finds orders and marks them complete

//Task 6: Create a Function to Check Pending Orders
function checkPendingOrders(orders) {
    orders.forEach(status => { if(status === "Pending")
    return customerName,itemsOrdered,status
})};
console.log(checkPendingOrders(orders)); // Output: is undefined there are no pending orders