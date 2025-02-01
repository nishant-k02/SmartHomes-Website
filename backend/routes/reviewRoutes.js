const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Submit a review
router.post('/submit', async (req, res) => {
    try {
        const newReview = new Review(req.body);
        await newReview.save();
        res.status(201).json({ message: 'Review submitted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
