// Function to display the cart
document.addEventListener("DOMContentLoaded",()=>{
function displayCart() {
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
  const cartContainer = document.getElementById("cart-container");
  const cartTotal = document.getElementById("cart-total");
  cartContainer.innerHTML = ""; // Clear existing content
  let totalAmount = 0;

  selectedItems.forEach((product) => {
    // Create product element
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-card");
    productDiv.innerHTML = `
      <img src="${product.image}" alt="Product Image" class="product-image">
      <p class="product-name">${product.Name}</p>
      <p class="product-price">Price: $${product.price}</p>
      <p class="product-quantity">Quantity: ${product.quantity}</p>
      <p class="product-total">Total: $${(product.price * product.quantity)}</p>
      <button class="remove-btn" data-name="${product.Name}">Remove</button>
    `;

    cartContainer.appendChild(productDiv);
    console.log(cartContainer)

    // Update total amount
    totalAmount += product.price * product.quantity;
  });

  // Update total price display
  cartTotal.innerText = `Total Amount: $${totalAmount}`;
  console.log(cartTotal)

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
displayCart();
})
console.log(localStorage.getItem("selectedItems"));
