// models/audiobook.js
const mongoose = require('mongoose');

const audiobookSchema = new mongoose.Schema({
    title: String,
    audio: String,
    author: String,
    genre: String,
    description: String,
    coverImage: String,
    rating: Number,
    reviews:[{type:mongoose.Schema.Types.ObjectId,ref:"Review"}]
});

module.exports = mongoose.model('Audiobook', audiobookSchema);
