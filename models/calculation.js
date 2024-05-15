const mongoose = require("mongoose");

const calculationSchema = new mongoose.Schema({
  shape: String,
  parameters: Object,
  area: Number,
  perimeter: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Calculation", calculationSchema);
