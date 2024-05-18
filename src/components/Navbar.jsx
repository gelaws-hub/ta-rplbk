import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Circle", to: "/circle" },
    { name: "Square", to: "/square" },
    { name: "Triangle", to: "/triangle" },
    { name: "Rectangle", to: "/rectangle" },
    { name: "Ellipse", to: "/ellipse" },
    { name: "Parallelogram", to: "/parallelogram" },
    { name: "Trapezoid", to: "/trapezoid" },
    { name: "Rhombus", to: "/rhombus" },
    { name: "History", to: "/history" },
  ];

  const styleIsActive = (isActive, linkName) => {
    return isActive
      ? "bg-sky-700 text-white px-4 py-1 rounded-full"
      : "hover:bg-sky-700 px-4 py-1 rounded-full";
  };

  return (
    <nav className="h-auto p-4 flex bg-gray-800 text-white items-center gap-8 justify-between">
      <div className="flex gap-1 overflow-auto font-semibold">
        {links.slice(0, -1).map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => styleIsActive(isActive, link.name)}
          >
            {link.name}
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
