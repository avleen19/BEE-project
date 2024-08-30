import React from 'react';
import { Button } from 'react-bootstrap'; 
import { IoBagOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Contexts/CartContext';

const AddToCartButton = ({ item }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleCartClick = () => {
        addToCart(item); // Add item to cart
        navigate('/cart'); // Navigate to the Cart page
    };

    return (
        <Button className='circle ml-2' onClick={handleCartClick}>
            <IoBagOutline />
        </Button>
    );
};

export default AddToCartButton;
