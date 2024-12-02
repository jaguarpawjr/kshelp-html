document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".select-btn");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const proName = button.getAttribute("data-name");
        const proImage = button.getAttribute("data-image");
        const proPrice = parseFloat(button.getAttribute("data-price")); // Parse price as a number
  
        const jsonData = {
          Name: proName,
          image: proImage,
          price: proPrice,
          quantity: 1,
        };
      
        // Retrieve cart from local storage or initialize as an empty array
        let selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
  
        // Ensure selectedItems is an array
        if (!Array.isArray(selectedItems)) {
          selectedItems = [];
        }
  
        // Check if the product is already in the cart
        const existingProduct = selectedItems.find((item) => item.Name === proName);
  
        if (existingProduct) {
          // Update quantity if product already exists
          existingProduct.quantity++;
        } else {
          // Add new product to the cart
          selectedItems.push(jsonData);
        }
  
        // Save updated cart to local storage
        localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
        alert(`${proName} added`);
      });
    });
  

  });
  
  