// server/config/db.js
const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    // console.error(err.message);
    console.log("could not connect DB: ", err)
    process.exit(1);
  }
};

module.exports = connectDB;
