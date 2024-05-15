const mongoose = require("mongoose");

// MongoDB Atlas connection string
const uri =
  "mongodb+srv://shapecalculator:shapecalculator@learn.n66ciy2.mongodb.net/?retryWrites=true&w=majority&appName=learn";

async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

module.exports = connectToDatabase;
