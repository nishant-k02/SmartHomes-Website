const express = require('express');
const router = express.Router();
const { mysqlConnection } = require('../config/db');

// Get all products

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM Products', (err, results) => {
        if (err) return res.status(500).json({error: err.message});
        res.json(results);
    });
});

module.exports = router;