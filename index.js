var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item;
 var itemPrice = Math.floor(Math.random() * 100) + 1;
  item = {
   itemName: itemName,
   itemPrice: itemPrice
 };
 cart.push(item);
 return`${itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  for (let i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }else if (cart.length === 2) {
      return`In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}.`;
    } else {
      if (cart.length === 3) {
         return`In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}, and ${cart[i + 2].itemName} at $${cart[i + 2].itemPrice}.`;
      }
    }
  }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
      total += cart[i].itemPrice;
    }
    return total;
  }

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
     if (cart[i].itemName === item) {
        cart.splice(i,1);
        return cart;
   }
}
return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
}


 /*if (cart.includes(item) === false) {
    return "That item is not in your cart.";
  }*/
