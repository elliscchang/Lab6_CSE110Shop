// product-item.js
var count = 0;

class ProductItem extends HTMLElement {
  constructor(item) {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    // create css elemets to apply to the shadow dom
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', './styles/styles.css');
    shadow.appendChild(linkElem);

    // create html elements
    const product = document.createElement('li');
    product.setAttribute('class', 'product');
    shadow.appendChild(product);

    const image = document.createElement('img');
    image.setAttribute('src', item.image);
    image.setAttribute('alt', item.title);
    image.setAttribute('width', 200);
    product.appendChild(image);

    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.textContent = item.title;
    product.appendChild(title);

    const price = document.createElement('p');
    price.setAttribute('class', 'price');
    price.textContent = '$' + item.price;
    product.appendChild(price);

    const button = document.createElement('button');
    button.textContent = "Add to Cart";
    product.appendChild(button);

    console.log(localStorage.getItem(item.id.toString()));
    if (localStorage.getItem(item.id.toString()) === null) {
      localStorage.setItem(item.id.toString(), '1');
      button.setAttribute("onclick", "alert('Added to Cart!')");
      button.textContent = "Add to Cart";
      product.appendChild(button);
    }
    else if (localStorage.getItem(item.id.toString()) === '1') {
      button.setAttribute("onclick", "alert('Added to Cart!')");
      button.textContent = "Add to Cart";
      product.appendChild(button);
    }
    else {
      button.setAttribute("onclick", "alert('Removed from Cart!')");
      button.textContent = "Remove from Cart";
      product.appendChild(button);
      count++;
      document.getElementById('cart-count').textContent = count;
    }

    button.onclick = function (event) {
      if (event.target.innerHTML == "Add to Cart") {
        alert('Added to Cart!');
        count = parseInt(document.getElementById('cart-count').textContent, 10);
        count++;
        document.getElementById('cart-count').textContent = count;
        button.textContent = "Remove from Cart";
        button.setAttribute("onclick", "alert('Removed from Cart!')");
        localStorage.setItem(item.id.toString(), '2');
      }
      else {
        count = parseInt(document.getElementById('cart-count').textContent, 10);
        count--;
        document.getElementById('cart-count').textContent = count;
        button.textContent = "Add to Cart";
        localStorage.setItem(item.id.toString(), '1');
      }
      product.appendChild(button);
    }
  }
}

customElements.define('product-item', ProductItem);