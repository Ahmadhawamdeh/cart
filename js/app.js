'use strict';

var Cart = function(items) {
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  var newItem = new CartItems(product, quantity);
  this.items.push(newItem);
};

Cart.prototype.saveToLocalStorage = function() {
  localStorage.setItem('cart', JSON.stringify(this.items));
};

Cart.prototype.delete = function(item) {
  this.items.splice(item, 1);
};

Cart.prototype.updateCounter = function() {
  document.getElementById('totalCount').textContent = '(' + this.items.length + ')';
};

var CartItems = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

var Product = function(folder, name) {
  this.folder = folder;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

generateCatalog();