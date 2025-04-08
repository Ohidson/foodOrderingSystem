let cart = [];

        function addToCart(name, price) {
            cart.push({ name, price });
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            cartItems.innerHTML = '';

            cart.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <span>${item.name}</span>
                    <span>$${item.price.toFixed(2)}</span>
                `;
                cartItems.appendChild(div);
            });

            const total = cart.reduce((sum, item) => sum + item.price, 0);
            document.getElementById('cart-total').textContent = 
                `Total: $${total.toFixed(2)}`;
        }

        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            alert(`Thank you for your order!\nTotal: $${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}\nYour food will be prepared soon!`);
            cart = [];
            updateCart();
        }
  