document.addEventListener("DOMContentLoaded", () => {
  // Helpers for localStorage cart
  const STORAGE_KEY = "selectedItems";

  const getCartItems = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  };

  const buildMap = (items) => {
    const map = new Map();
    items.forEach((p) => {
      if (!p || !p.Name) return;
      const qty = Number(p.quantity) || 1;
      if (map.has(p.Name)) {
        const ex = map.get(p.Name);
        ex.quantity += qty;
      } else {
        map.set(p.Name, {
          Name: p.Name,
          price: Number(p.price) || 0,
          quantity: qty,
          image: p.image || "",
        });
      }
    });
    return map;
  };

  const saveMap = (map) => {
    const arr = Array.from(map.values()).map((p) => ({
      Name: p.Name,
      price: p.price,
      quantity: p.quantity,
      image: p.image,
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  };

  const getTotalQty = (map) => Array.from(map.values()).reduce((sum, p) => sum + (Number(p.quantity) || 0), 0);
  const getTotalAmount = (map) => Array.from(map.values()).reduce((sum, p) => sum + (Number(p.price) * Number(p.quantity) || 0), 0);

  const updateCartCount = (map) => {
    const el = document.getElementById("cart-count");
    if (el) el.textContent = String(getTotalQty(map));
  };

  function renderCart() {
    const cartItems = getCartItems();
    const map = buildMap(cartItems);

    const listEl = document.querySelector("#cart-container .cart-items");
    const totalEl = document.getElementById("cart-total");

    if (!listEl || !totalEl) return;

    listEl.innerHTML = "";

    if (map.size === 0) {
      listEl.innerHTML = `<div class="empty-state">Your cart is empty. <a href="../shop.html">Go to shop</a></div>`;
      totalEl.textContent = `Total Amount: $0.00`;
      updateCartCount(map);
      return;
    }

    // Render items
    map.forEach((product) => {
      const lineTotal = (Number(product.price) * Number(product.quantity)).toFixed(2);
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="Product Image" class="product-image">
        <p class="product-name">${product.Name}</p>
        <p class="product-price">Price: $${Number(product.price).toFixed(2)}</p>
        <div class="qty-row" data-name="${product.Name}">
          <button class="qty-btn minus" aria-label="Decrease">-</button>
          <input type="number" class="qty-input" min="1" value="${product.quantity}" />
          <button class="qty-btn plus" aria-label="Increase">+</button>
        </div>
        <p class="product-total">Total: $<span class="line-total">${lineTotal}</span></p>
        <button class="remove-btn" data-name="${product.Name}">Remove</button>
      `;
      listEl.appendChild(card);
    });

    // Update totals and badge
    totalEl.textContent = `Total Amount: $${getTotalAmount(map).toFixed(2)}`;
    updateCartCount(map);

    // Wire up events
    listEl.querySelectorAll(".qty-row").forEach((row) => {
      const name = row.getAttribute("data-name");
      const minus = row.querySelector(".minus");
      const plus = row.querySelector(".plus");
      const input = row.querySelector(".qty-input");

      const applyQty = (next) => {
        const qty = Math.max(1, Number(next) || 1);
        if (map.has(name)) {
          const p = map.get(name);
          p.quantity = qty;
          saveMap(map);
          renderCart();
        }
      };

      minus.addEventListener("click", () => applyQty((Number(input.value) || 1) - 1));
      plus.addEventListener("click", () => applyQty((Number(input.value) || 1) + 1));
      input.addEventListener("change", () => applyQty(input.value));
    });

    listEl.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-name");
        if (map.has(name)) {
          map.delete(name);
          saveMap(map);
          renderCart();
        }
      });
    });
  }

  // Initial render
  renderCart();

  // Expose in console for quick debug (optional)
  console.log(localStorage.getItem("selectedItems"));
});