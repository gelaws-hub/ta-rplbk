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

const App = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      <div className="flex h-screen">
        <Router>
          <div
            className={`h-screen transition-all duration-300 ${
              isNavbarVisible ? "w-1/4 min-w-[200px]" : "w-0"
            } overflow-hidden bg-gray-800 text-white`}
          >
            {isNavbarVisible && <Navbar />}
          </div>
          <div className="flex-1 p-4 min-h-screen">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mb-4"
              onClick={toggleNavbar}
            >
              {isNavbarVisible ? "Hide Navbar" : "Show Navbar"}
            </button>
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
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default App;
