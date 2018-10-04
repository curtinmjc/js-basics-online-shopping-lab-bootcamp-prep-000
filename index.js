var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 item = {itemName: item, itemPrice: Math.floor(Math.random() * 101)};
 cart.push(item);
 return item.itemName + " has been added to your cart."
}

function viewCart() {
  // write your code here
  var cartAsString;
  if (cart.length === 0) {
    cartString = "Your shopping cart is empty.";
  } else {
    cartAsString = "In your cart, you have ";
    for (var num = 0; num < cart.length - 1; num++) {
      cartAsString = cartAsString + cart[num].itemName + " at $" + cart[num].itemPrice + ", ";
    }
    cartAsString = cartAsString + "and " + cart[num].itemName + " at $" + cart[num].itemPrice + ".";
  }
  return cartAsString;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
