import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Circle from "./Pages/Circle";
import Square from "./Pages/Square";
import Triangle from "./Pages/Triangle";
import Rectangle from "./Pages/Rectangle";
import Ellipse from "./Pages/Ellipse";
import Parallelogram from "./Pages/Parallelogram";
import Trapezoid from "./Pages/Trapezoid";
import Rhombus from "./Pages/Rhombus";
import HistoryPage from "./Pages/HistoryPage";
import HelpPage from "./Pages/HelpPage";
import Homepage from "./Pages/HomePage";

const MainContainer = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/circle" element={<Circle />} />
        <Route path="/square" element={<Square />} />
        <Route path="/triangle" element={<Triangle />} />
        <Route path="/rectangle" element={<Rectangle />} />
        <Route path="/ellipse" element={<Ellipse />} />
        <Route path="/parallelogram" element={<Parallelogram />} />
        <Route path="/trapezoid" element={<Trapezoid />} />
        <Route path="/rhombus" element={<Rhombus />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainContainer;
