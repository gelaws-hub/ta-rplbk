import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-auto p-4 flex bg-gray-800 text-white items-center gap-8 justify-between">
      <div className="flex gap-1 overflow-auto font-semibold">
        <NavLink to="/circle" className="hover:bg-sky-700 px-4 py-1 rounded-full">
          Circle
        </NavLink>
        <NavLink to="/square" className="hover:bg-sky-700 px-4 py-1 rounded-full">
          Square
        </NavLink>
        <NavLink to="/triangle" className="hover:bg-sky-700 px-4 py-1 rounded-full">
          Triangle
        </NavLink>
        <NavLink to="/rectangle" className="hover:bg-sky-700 px-4 py-1 rounded-full">
          Rectangle
        </NavLink>
        <NavLink to="/ellipse" className="hover:bg-sky-700 px-4 py-1 rounded-full">
          Ellipse
        </NavLink>
        <NavLink to="/parallelogram" className="hover:bg-sky-700 px-4 py-1 rounded-full">
          Parallelogram
        </NavLink>
        <NavLink to="/trapezoid" className="hover:bg-sky-700 px-4 py-1 rounded-full">
          Trapezoid
        </NavLink>
        <NavLink to="/rhombus" className="hover:bg-sky-700 px-4 py-1 rounded-full">
          Rhombus
        </NavLink>
        <div className="flex-grow"></div>{" "}
        {/* This will push History to the bottom */}
      </div>
      <NavLink to="/history" className="hover:bg-sky-700 px-4 py-1 rounded-full">
        History
      </NavLink>
    </nav>
  );
};

export default Navbar;
