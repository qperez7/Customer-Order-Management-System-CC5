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
    {name: "Expresso",price:3,quantity:1},
    {name: 'Latte', price: 4, quantity: 3 },
]

function placeOrder(customerName,itemsOrdered) {
  if (itemsOrdered.forEach( item => {inventory.name}));
        return {
            customerName,
            itemsOrdered,
            status: "Pending",
        }
}
console.log(orders.push(placeOrder));

//Task 4: Create a Function to Calculate Total for an Order
//let totalprice = itemsOrdered.price
//let totalOrdered = totalprice.reduce((acc,currentvalue) => acc + currentvalue,0);
//console.log(totalOrdered);

//Task 5: Create a Function to Mark an Order as Completed
function completeOrder(Name) {
  if(  orders.find((customerName) => customerName === Name))
    return {Name,status: "Completed"}
  else
  return {customerName:"Order is not found"}
};
console.log(completeOrder("Alice"));
