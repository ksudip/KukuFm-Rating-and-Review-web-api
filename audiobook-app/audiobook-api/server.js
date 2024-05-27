// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config()
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/auth', require('./models/routes/auth'));
connectDB();
mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
    console.log("DB Connection sucessfull");
}).catch((error)=>{
    console.log("DB connection failed",error);
});

const Audiobook = require('./models/audiobook');
const Review = require('./models/review');
app.get('/audiobooks', async (req, res) => {
    console.log(req.query);
    const audiobooks = await Audiobook.find(req.query);
    return res.json(audiobooks);
});

app.get('/audiobooks/:id', async (req, res) => {
    const audiobook = await Audiobook.findById(req.params.id).populate("reviews");
    res.json(audiobook);
});

app.post('/audiobooks/:id/reviews', async (req, res) => {
    const review = new Review({ ...req.body, audiobook: req.params.id });
    await review.save();
    await Audiobook.findByIdAndUpdate( req.params.id,{
        $push:{
            reviews:review._id
        }
    })
    res.status(201).json(review);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
