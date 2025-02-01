import React, { useState } from 'react';
import { placeOrder } from '../utils/api';

const CheckoutPage = () => {
    const [orderData, setOrderData] = useState({
        UserID: 1,  // Hardcoded for now
        ProductID: 1,  // Hardcoded for now
        StoreID: 1,  // Hardcoded for now
        Quantity: 1,
        Pickup: false
    });

    const handleOrder = () => {
        placeOrder(orderData).then(response => {
            alert(`Order Placed! Order ID: ${response.data.orderId}`);
        }).catch(error => {
            console.error("Error placing order:", error);
        });
    };

    return (
        <div>
            <h2>Checkout</h2>
            <label>
                Quantity:
                <input type="number" value={orderData.Quantity} onChange={(e) => setOrderData({ ...orderData, Quantity: e.target.value })} />
            </label>
            <label>
                Store Pickup:
                <input type="checkbox" checked={orderData.Pickup} onChange={(e) => setOrderData({ ...orderData, Pickup: e.target.checked })} />
            </label>
            <button onClick={handleOrder}>Place Order</button>
        </div>
    );
};

export default CheckoutPage;
