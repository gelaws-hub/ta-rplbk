import React from "react";
import { NavLink } from "react-router-dom";
import { HiArchive, HiHome, HiQuestionMarkCircle } from "react-icons/hi";

import circleIcon from "./icons/circle.png";
import squareIcon from "./icons/square.png";
import triangleIcon from "./icons/triangle.png";
import rectangleIcon from "./icons/rectangle.png";
import ellipseIcon from "./icons/ellipse.png";
import parallelogramIcon from "./icons/parallelogram.png";
import trapezoidIcon from "./icons/trapezoid.png";
import rhombusIcon from "./icons/rhombus.png";

const Navbar = () => {
  const links = [
    { name: "Circle", to: "/circle", icon: circleIcon },
    { name: "Square", to: "/square", icon: squareIcon },
    { name: "Triangle", to: "/triangle", icon: triangleIcon },
    { name: "Rectangle", to: "/rectangle", icon: rectangleIcon },
    { name: "Ellipse", to: "/ellipse", icon: ellipseIcon },
    { name: "Parallelogram", to: "/parallelogram", icon: parallelogramIcon },
    { name: "Trapezoid", to: "/trapezoid", icon: trapezoidIcon },
    { name: "Rhombus", to: "/rhombus", icon: rhombusIcon },
    { name: "History", to: "/history" },
  ];

  const mobileLinks = [
    { name: "HomePage", to: "/", icon: <HiHome /> },
    { name: "History", to: "/history", icon: <HiArchive /> },
    { name: "FAQ", to: "/faq", icon: <HiQuestionMarkCircle /> },
  ];

  const styleIsActive = (isActive) => {
    return isActive
      ? "bg-sky-700 text-white px-4 py-1 rounded-xl"
      : "hover:bg-sky-700 px-4 py-1 rounded-xl";
  };

  return (
    <>
      <nav className="hidden md:h-auto md:p-4 md:flex bg-gray-800 md:text-white md:items-center md:gap-8 md:justify-between">
        <div className="flex gap-1 overflow-auto font-semibold">
          {links.slice(0, -1).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => styleIsActive(isActive)}
            >
              <div className="flex flex-row overflow font-semibold">
                <img src={link.icon} alt={link.name} className="h-6 invert mr-2" />
                <p className="hidden">{link.name}</p>
              </div>
            </NavLink>
          ))}
          <div className="flex-grow"></div>
        </div>
        <div className="flex gap-1 overflow-auto font-semibold">
          <NavLink
            to={links[links.length - 1].to}
            className={({ isActive }) => styleIsActive(isActive)}
          >
            {links[links.length - 1].name}
          </NavLink>
        </div>
      </nav>

      {/* For Mobile */}
      <nav className="md:hidden bg-gray-800 text-white items-center font-semibold justify-center flex fixed bottom-0 w-full z-50 py-2 px-3 gap-4">
        {mobileLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => styleIsActive(isActive)}
          >
            {link.icon}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
