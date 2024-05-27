// models/review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    audiobook: { type: mongoose.Schema.Types.ObjectId, ref: 'Audiobook' },
    user: String,
    rating: Number,
    comment: String,
});

module.exports = mongoose.model('Review', reviewSchema);
