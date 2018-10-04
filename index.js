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
    cartAsString = "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    cartAsString = "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + "." ;
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
  var totalPrice = 0;
  for (var num = 0; num < cart.length; num++) {
    totalPrice = totalPrice + cart[num].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  for (var num; num < cart.length; num++) {
    if (cart[num].itemName === item) {
      cart.splice(num, 1);
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
