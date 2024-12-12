document.addEventListener("DOMContentLoaded", () => {
    function displayCart() {
      const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
      const cartContainer = document.getElementById("cart-container");
      const cartTotal = document.getElementById("cart-total");
      cartContainer.innerHTML = ""; // Clear existing content
      let totalAmount = 0;
  
      // Group items by name
      const productMap = new Map();
      selectedItems.forEach((product) => {
        if (productMap.has(product.Name)) {
          const existingProduct = productMap.get(product.Name);
          existingProduct.quantity += product.quantity;
          existingProduct.totalPrice += product.price * product.quantity;
        } else {
          productMap.set(product.Name, {
            ...product,
            totalPrice: product.price * product.quantity,
          });
        }
      });
  
      // Display each unique product
      productMap.forEach((product) => {
        // Create product element
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-card");
        productDiv.innerHTML = `
          <img src="${product.image}" alt="Product Image" class="product-image">
          <p class="product-name">${product.Name}</p>
          <p class="product-price">Price: $${product.price}</p>
          <p class="product-quantity">Quantity: ${product.quantity}</p>
          <p class="product-total">Total: $${product.totalPrice.toFixed(2)}</p>
          <button class="remove-btn" data-name="${product.Name}">Remove</button>
        `;
        cartContainer.appendChild(productDiv);
  
        // Update total amount
        totalAmount += product.totalPrice;
      });
  
      // Update total price display
      cartTotal.innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
  
      // Add remove functionality
      const removeButtons = document.querySelectorAll(".remove-btn");
      removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const productName = button.getAttribute("data-name");
  
          // Remove the product from the cart
          const updatedCart = selectedItems.filter((item) => item.Name !== productName);
  
          // Update local storage and refresh cart display
          localStorage.setItem("selectedItems", JSON.stringify(updatedCart));
          displayCart(); // Refresh cart view
        });
      });
    }
  
    // Initial call to display the cart
    displayCart();
  });
  
  console.log(localStorage.getItem("selectedItems"));
  