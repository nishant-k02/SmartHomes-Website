const express = require('express');
const router = express.Router();
const { mysqlConnection } = require('../config/db');

// Place an order
router.post('/place', (req, res) => {
    const { CustomerID, ProductID, StoreID, Quantity, Pickup } = req.body;
    const TotalSales = Quantity * 199.99; // Example calculation
    const ShipDate = new Date();
    ShipDate.setDate(ShipDate.getDate() + 14); // 2 weeks after order date

    const query = 'INSERT INTO Transactions (CustomerID, ProductID, StoreID, Quantity, TotalSales, ShipDate, Pickup) VALUES (?, ?, ?, ?, ?, ?, ?)';
    mysqlConnection.query(query, [CustomerID, ProductID, StoreID, Quantity, TotalSales, ShipDate, Pickup], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Order placed successfully', orderId: results.insertId });
    });
});

module.exports = router;
