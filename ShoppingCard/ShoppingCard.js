document.addEventListener("DOMContentLoaded", function () {
    // Select all necessary elements
    const cartItems = document.querySelectorAll(".cart-item");
    const totalPriceElement = document.querySelector(".total-price");

    // Initialize total price
    let totalPrice = 0;

    // Calculate initial total price
    function calculateInitialTotal() {
        totalPrice = 0;
        cartItems.forEach((item) => {
            const price = parseFloat(
                item.querySelector(".item-price").textContent.replace("$", "")
            );
            const quantity = parseInt(
                item.querySelector(".item-quantity").value
            );
            totalPrice += price * quantity;
        });
        updateTotalPrice();
    }

    // Update total price display
    function updateTotalPrice() {
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Initialize event listeners for each cart item
    cartItems.forEach((item) => {
        // Quantity adjustment
        const minusBtn = item.querySelector(".minus-btn");
        const plusBtn = item.querySelector(".plus-btn");
        const quantityInput = item.querySelector(".item-quantity");
        const priceElement = item.querySelector(".item-price");
        const price = parseFloat(priceElement.textContent.replace("$", ""));

        // Like button
        const likeBtn = item.querySelector(".like-btn");

        // Delete button
        const deleteBtn = item.querySelector(".delete-btn");

        // Minus button click
        minusBtn.addEventListener("click", function () {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
                totalPrice -= price;
                updateTotalPrice();
            }
        });

        // Plus button click
        plusBtn.addEventListener("click", function () {
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
            totalPrice += price;
            updateTotalPrice();
        });

        // Quantity input change
        quantityInput.addEventListener("change", function () {
            const newQuantity = parseInt(quantityInput.value);
            if (newQuantity < 1 || isNaN(newQuantity)) {
                quantityInput.value = 1;
                return;
            }

            const oldQuantity = parseInt(quantityInput.dataset.prevValue || 1);
            const quantityDifference = newQuantity - oldQuantity;
            totalPrice += price * quantityDifference;
            quantityInput.dataset.prevValue = newQuantity;
            updateTotalPrice();
        });

        // Like button click
        likeBtn.addEventListener("click", function () {
            likeBtn.classList.toggle("liked");
        });

        // Delete button click
        deleteBtn.addEventListener("click", function () {
            const quantity = parseInt(quantityInput.value);
            totalPrice -= price * quantity;
            item.remove();
            updateTotalPrice();
        });
    });

    // Calculate initial total when page loads
    calculateInitialTotal();
});
