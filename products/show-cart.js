// show-cart.js

function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsDiv = document.getElementById("cart-items");
    const cartTotalDiv = document.getElementById("cart-total");
  
    cartItemsDiv.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
  
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
  
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-details">
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <p>Subtotal: ₹${itemTotal}</p>
        </div>
        <div class="cart-controls">
          <button onclick="decreaseQuantity(${index})">−</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQuantity(${index})">+</button>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      `;
  
      cartItemsDiv.appendChild(cartItem);
    });
  
    cartTotalDiv.innerText = `Total: ₹${total}`;
  }
  
  function increaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
  
  function decreaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
  
  function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
  
  document.getElementById("checkout-btn").addEventListener("click", function () {
    alert("Proceeding to checkout...");
    // You can redirect or handle payment logic here
  });
  
  window.onload = loadCart;
  