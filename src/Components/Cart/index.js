import React from 'react';
import { useCart } from '../../Contexts/CartContext';

const Cart = () => {
    const { cartItems } = useCart(); // Get cart items from context

    // Calculate total price with safety checks
    const totalPrice = cartItems.reduce((total, item) => {
        // Ensure item and item.price are valid
        if (item && item.price) {
            const price = parseFloat(item.price.replace('₹', ''));
            return total + (isNaN(price) ? 0 : price);
        }
        return total;
    }, 0);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <>
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <span className="cart-item-name">{item.name}</span>
                                    <span className="cart-item-price">{item.price}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
