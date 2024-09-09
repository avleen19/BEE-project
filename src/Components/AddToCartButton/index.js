import React from 'react';
import { useCart } from '../../Contexts/CartContext';

const AddToCartButton = ({ item }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(item); 
        alert(`${item.name} added to cart`);
    };

    return (
        <button className="add-to-cart-button" onClick={handleAddToCart}>
            ADD TO CART
        </button>
    );
};

export default AddToCartButton;
