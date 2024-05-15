const express = require("express");
const router = express.Router();
const Calculation = require("./models/calculation");

router.post("/save", async (req, res) => {
  const { shape, parameters, area, perimeter } = req.body;
  const newCalculation = new Calculation({
    shape,
    parameters,
    area,
    perimeter,
  });
  try {
    const savedCalculation = await newCalculation.save();
    res.status(201).json(savedCalculation);
  } catch (error) {
    res.status(400).json({ message: "Failed to save calculation" });
  }
});

router.get("/history", async (req, res) => {
  try {
    const calculations = await Calculation.find().sort({ date: -1 });
    res.json(calculations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Calculation.findByIdAndDelete(id);
    res.status(200).json({ message: "Calculation deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
