// Script.js
const myList = document.getElementById('product-list');

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(function(data) {
      localStorage.setItem('array', JSON.stringify(data));
      var array = localStorage.getItem('array')
      var obj = JSON.parse(array);
      obj.forEach(function(item) {
        myList.appendChild(new ProductItem(item));
      });
    })
    .catch(function(error) {
      console.log(error);
    });
});