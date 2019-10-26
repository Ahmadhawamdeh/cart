'use strict';

var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
function newFcart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

function renderCart() {
  newFcart();
  deleteCart();
  Presentation();
  cart.updateCounter();
}

function deleteCart() {
  var tabRows = document.querySelectorAll('#cart tbody tr');

  for (var i = 0; i <= tabRows.length; i++) {
    if (tabRows[i]) {
      tabRows[i].remove();
    }
  }
}

function Presentation() {
  var tabData = document.querySelector('#cart tbody');

  for (var i in cart.items) {
    var tr = document.createElement('tr');

    var tabDataone = document.createElement('td');
    tabDataone.textContent = 'x';
    tabDataone.classList.add('deletecup');
    tabDataone.id = i;

    var tabDatatwo = document.createElement('td');
    tabDatatwo.textContent = cart.items[i].quantity;

    var tabDatathree = document.createElement('td');
    tabDatathree.textContent = cart.items[i].product;

    tabData.appendChild(tr);
    tr.appendChild(tabDataone);
    tr.appendChild(tabDatatwo);
    tr.appendChild(tabDatathree);
  }
}

function removeItemFromCart(event) {
  if (event.target.classList.contains('deletecup')) {
    cart.delete(parseInt(event.target.id));
    cart.saveToLocalStorage();
    renderCart();
  }
}

renderCart();