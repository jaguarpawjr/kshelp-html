<script>
// Retrieve items from localStorage and render them in the cart
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is currently empty.</p>'};
        return;
    }
    

    cartItemsContainer.innerHTML = ''; // Clear previous items

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <div>
                <p><strong>${item.name}</strong></p>
                <p>Quantity: 
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span id="quantity-${index}">${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </p>
            </div>
            <hr>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Update item quantity in the cart
function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart[index]) {
        cart[index].quantity += change;

        // Remove item if quantity goes to 0 or below
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
    }
}

// Initialize the cart on page load
document.addEventListener('DOMContentLoaded', loadCartItems);
</script>