import React, { useState } from 'react';
import SearchBox from '../Header/SearchBox'; // Make sure this path is correct
import AddToCartButton from '../AddToCartButton';

const Products = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Test Tube', price: '₹200', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXfysxkcncvNOnX6F3DaZ6HqBRZfUh3lGesg70bvyzRFCMkJzcTG-V0TFeLuX04qQJL0&usqp=CAU' },
        { id: 2, name: 'Lab Microscope', price: '₹2000', image: 'https://cdn.shopify.com/s/files/1/2407/1409/articles/Laboratory_Microscope.jpg?v=1684147132' },
        { id: 3, name: 'Dropper', price: '₹250', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQioPgxADrkCzHybiX-K1-omw9-kfMhGJ3Tg&s' },
        { id: 4, name: 'Oxygen Mask', price: '₹800', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPdJjj28Hv0eWrYc9mAoIVYLM8BrHaUxR5SFWDYL_opSc-ooctC55uC2L1Lv2RgsqemY&usqp=CAU' },
        { id: 5, name: 'Stethoscope', price: '₹1500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVSB6BcLnAqpaL4P4Q2K9tMryckoReTUdo8vZcgmYhRgoaOytYlod_mACNsY5AZYocuU&usqp=CAU' },
        { id: 6, name: 'Digital BP Machine', price: '₹1200', image: 'https://smartmedicalbuyer.com/cdn/shop/products/niscomed-niscomed-aneroid-blood-pressure-bp-monitor-pw-217-22566982484141.jpg?v=1604316570' },
        { id: 7, name: 'Thermometer', price: '₹300', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Vo5BLYbDZbcwqe5_YAvzaUE0tDFongbPMuDMXRUgoalV1rDnjYW4iHuSre0xYL90zmg&usqp=CAU' },
        { id: 8, name: 'Surgical Syringe', price: '₹400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHJje9v_1oPDmpFiNYCrDNNkIr0OM07afsw&s' },
        { id: 9, name: 'Lab Microscope', price: '₹2000', image: 'https://cdn.shopify.com/s/files/1/2407/1409/articles/Laboratory_Microscope.jpg?v=1684147132' },
        { id: 10, name: 'Dropper', price: '₹250', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQioPgxADrkCzHybiX-K1-omw9-kfMhGJ3Tg&s' },
        { id: 11, name: 'Oxygen Mask', price: '₹800', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPdJjj28Hv0eWrYc9mAoIVYLM8BrHaUxR5SFWDYL_opSc-ooctC55uC2L1Lv2RgsqemY&usqp=CAU' },
        { id: 12, name: 'Stethoscope', price: '₹1500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVSB6BcLnAqpaL4P4Q2K9tMryckoReTUdo8vZcgmYhRgoaOytYlod_mACNsY5AZYocuU&usqp=CAU' },
        { id: 13, name: 'Digital BP Machine', price: '₹1200', image: 'https://smartmedicalbuyer.com/cdn/shop/products/niscomed-niscomed-aneroid-blood-pressure-bp-monitor-pw-217-22566982484141.jpg?v=1604316570' },
        { id: 14, name: 'Thermometer', price: '₹300', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Vo5BLYbDZbcwqe5_YAvzaUE0tDFongbPMuDMXRUgoalV1rDnjYW4iHuSre0xYL90zmg&usqp=CAU' },
        { id: 15, name: 'Surgical Syringe', price: '₹400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHJje9v_1oPDmpFiNYCrDNNkIr0OM07afsw&s' },
        { id: 16, name: 'Surgical Syringe', price: '₹400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHJje9v_1oPDmpFiNYCrDNNkIr0OM07afsw&s' },
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="prodspg">
            <h2 className="headprod">Products</h2>
            <SearchBox setProducts={setProducts} />
            <div className="products-container">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{product.price}</p>
                        <AddToCartButton item={product} /> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
