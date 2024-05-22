import React from "react";
import { NavLink } from "react-router-dom";
import {
  HiArchive,
  HiHome,
  HiQuestionMarkCircle,
  HiOutlineHome,
  HiOutlineArchive,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

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
    { name: "FAQ", to: "/faq" },
  ];

  const mobileLinks = [
    {
      name: "Home",
      to: "/",
      icon: <HiHome size={32} />,
      outlineIcon: <HiOutlineHome size={32} />,
    },
    {
      name: "History",
      to: "/history",
      icon: <HiArchive size={32} />,
      outlineIcon: <HiOutlineArchive size={32} />,
    },
    {
      name: "FAQ",
      to: "/faq",
      icon: <HiQuestionMarkCircle size={32} />,
      outlineIcon: <HiOutlineQuestionMarkCircle size={32} />,
    },
  ];

  const styleIsActive = (isActive) => {
    return isActive
      ? "bg-sky-700 text-white px-4 py-1 rounded-xl md:shadow-inner"
      : "hover:bg-sky-700 px-4 py-1 rounded-xl";
  };

  return (
    <>
      <nav className="hidden md:h-auto md:p-4 md:flex md:flex-wrap bg-gray-800 md:text-white md:items-center md:gap-8 md:justify-between">
        <div className="flex gap-1 overflow-auto font-normal flex-wrap">
          {links.slice(0, -2).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => styleIsActive(isActive)}
            >
              {({ isActive }) => (
                <div className="flex flex-row font-normal m-auto">
                  <img
                    src={link.icon}
                    alt={link.name}
                    className={`h-6 ${isActive ? "" : "invert"} mr-2`}
                  />
                  <p>{link.name}</p>
                </div>
              )}
            </NavLink>
          ))}
          <div className="flex-grow"></div>
        </div>
        <div className="flex gap-1 overflow-auto font-normal">
          {links.slice(-2).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => styleIsActive(isActive)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* For Mobile */}
      <nav
        className="md:hidden bg-white text-gray-800 items-center font-semibold 
      justify-center flex fixed bottom-0 w-full z-50 py-2 px-3 gap-7 text-2xl sm:gap-9 drop-shadow-2xl"
      >
        {mobileLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="flex flex-col items-center px-4 py-1 rounded-xl "
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className="text-gray-800">{link.icon}</span>
                ) : (
                  <span className="text-gray-600">{link.outlineIcon}</span>
                )}
                <p
                  className={`${
                    isActive ? "text-gray-800" : "text-gray-600"
                  } text-center -mt-1 scroll text-xs`}
                >
                  {link.name}
                </p>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
