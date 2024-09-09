import React from 'react';
import { useCart } from '../../Contexts/CartContext';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const totalPrice = cartItems.reduce((total, item) => {
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
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <span className="cart-item-name">{item.name}</span>
                                    <span className="cart-item-price">{item.price}</span>
                                    <div className="quantity-controls">
                                        <Button
                                            variant="secondary"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </Button>
                                        <span>{item.quantity}</span>
                                        <Button
                                            variant="secondary"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                    <Button
                                        variant="danger"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
                    <Button variant="primary" className="buy-now-button">
                        Buy Now
                    </Button>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
