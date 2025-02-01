import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(response => {
            setProducts(response.data);
        }).catch(error => {
            console.error("Error fetching products:", error);
        });
    }, []);

    return (
        <div>
            <h1>SmartHomes Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.ProductID}>
                        <h3>{product.Name}</h3>
                        <p>{product.Description}</p>
                        <p>Price: ${product.Price}</p>
                        <button>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
