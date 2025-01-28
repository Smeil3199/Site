let cart = [];

function addToCart(item) {
    cart.push(item);
    displayCart();
}

function displayCart() {
    let cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';  // очищаем корзину перед выводом
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Корзина пуста.</p>';
    } else {
        cart.forEach(item => {
            cartDiv.innerHTML += `<p>${item}</p>`;
        });
    }
}

function clearCart() {
    cart = [];
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста! Добавьте что-то в корзину.');
    } else {
        alert('Ваш заказ оформлен. Спасибо за покупку!');
        cart = [];
        displayCart();
    }
}

