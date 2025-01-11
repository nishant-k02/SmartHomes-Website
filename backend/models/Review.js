const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    ProductModelName: String,
    UserID: String,
    ReviewRating: Number,
    ReviewText: String,
    ReviewDate: Date
});

module.exports = mongoose.model('Review', ReviewSchema);
