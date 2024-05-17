import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Circle from "./Pages/Circle";
import Square from "./Pages/Square";
import Triangle from "./Pages/Triangle";
import Rectangle from "./Pages/Rectangle";
import Ellipse from "./Pages/Ellipse";
import Parallelogram from "./Pages/Parallelogram";
import Trapezoid from "./Pages/Trapezoid";
import Rhombus from "./Pages/Rhombus";
import HistoryPage from "./Pages/HistoryPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      <div className="h-screen">
        <Header />
        <Router>
          <Navbar />
          <div className="flex-1 p-4 min-h-screen">
            <Routes>
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
          </div>
        </Router>
        <Footer />
      </div>
    </>
  );
};

export default App;