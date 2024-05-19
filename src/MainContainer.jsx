import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Circle from './Pages/Circle';
import Square from './Pages/Square';
import Triangle from './Pages/Triangle';
import Rectangle from './Pages/Rectangle';
import Ellipse from './Pages/Ellipse';
import Parallelogram from './Pages/Parallelogram';
import Trapezoid from './Pages/Trapezoid';
import Rhombus from './Pages/Rhombus';
import HistoryPage from './Pages/HistoryPage';
import Homepage from './Pages/HomePage';

const MainContainer = () => {
  const navigate = useNavigate();

  const mobileLinks = [
    { name: "HomePage", to: "/" },
    { name: "History", to: "/history" },
    { name: "FAQ", to: "/faq" },
  ];

  const handleSwipe = (direction) => {
    const currentPath = window.location.pathname;
    const currentIndex = mobileLinks.findIndex((link) => link.to === currentPath);
    if (currentIndex !== -1) {
      if (direction === "left" && currentIndex < mobileLinks.length - 1) {
        navigate(mobileLinks[currentIndex + 1].to);
      } else if (direction === "right" && currentIndex > 0) {
        navigate(mobileLinks[currentIndex - 1].to);
      }
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="h-screen flex flex-col">
      <Header />
      <Navbar />
      {/* <div className="flex-1 p-4 min-h-screen"> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
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
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default MainContainer;
