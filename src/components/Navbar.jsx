import React from "react";
import { NavLink } from "react-router-dom";

// Import Icons
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

  const styleIsActive = (isActive, linkName) => {
    return isActive
      ? "bg-sky-700 text-white px-4 py-1 rounded-xl"
      : "hover:bg-sky-700 px-4 py-1 rounded-xl";
  };

  return (
    <nav className="h-auto p-4 flex bg-gray-800 text-white items-center gap-8 justify-between">
      <div className="flex gap-1 overflow-auto font-semibold
      ">
        {links.slice(0, -1).map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => styleIsActive(isActive, link.name)}
          >
            <img src={link.icon} alt={link.name} className="h-6 invert" />
          </NavLink>
        ))}
        <div className="flex-grow"></div>
      </div>
      <div className="flex gap-1 overflow-auto font-semibold">
        <NavLink
          to={links[links.length - 1].to}
          className={({ isActive }) =>
            styleIsActive(isActive, links[links.length - 1].name)
          }
        >
          {links[links.length - 1].name}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
