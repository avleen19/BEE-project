import React from 'react';
import { useLocation } from 'react-router-dom';


const SearchResults = () => {
    const location = useLocation();
    const products = location.state?.products || [];

    return (
        <div className="search-results-container">
            <h2>Search Results</h2>
            <div className="products-list">
                {products.length === 0 ? (
                    <p>No products found.</p>
                ) : (
                    products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">{product.price}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchResults;
