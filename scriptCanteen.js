document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const cartList = document.querySelector('.cart ul');
    const checkoutBtn = document.querySelector('.checkout-btn');

    menuItems.forEach(item => {
        const addToCartBtn = item.querySelector('button');
        addToCartBtn.addEventListener('click', function() {
            const menuItem = item.querySelector('p').textContent;
            const listItem = document.createElement('li');
            listItem.textContent = menuItem;
            cartList.appendChild(listItem);
        });
    });

    checkoutBtn.addEventListener('click', function() {
        const cartItems = cartList.querySelectorAll('li');
        if (cartItems.length > 0) {
            alert('Your order has been placed!');
            cartItems.forEach(item => {
                item.remove();
            });
        } else {
            alert('Your cart is empty. Please add items before checking out.');
        }
    });
});
