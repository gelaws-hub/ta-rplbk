import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-screen p-4 flex flex-col bg-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4">Shapes</h1>
      <div className="flex flex-col flex-grow">
        <NavLink to="/circle" className="mb-2" activeClassName="font-bold">
          Circle
        </NavLink>
        <NavLink to="/square" className="mb-2" activeClassName="font-bold">
          Square
        </NavLink>
        <NavLink to="/triangle" className="mb-2" activeClassName="font-bold">
          Triangle
        </NavLink>
        <NavLink to="/rectangle" className="mb-2" activeClassName="font-bold">
          Rectangle
        </NavLink>
        <NavLink to="/ellipse" className="mb-2" activeClassName="font-bold">
          Ellipse
        </NavLink>
        <NavLink to="/parallelogram" className="mb-2" activeClassName="font-bold">
          Parallelogram
        </NavLink>
        <NavLink to="/trapezoid" className="mb-2" activeClassName="font-bold">
          Trapezoid
        </NavLink>
        <NavLink to="/rhombus" className="mb-2" activeClassName="font-bold">
          Rhombus
        </NavLink>
        <div className="flex-grow"></div> {/* This will push History to the bottom */}
      </div>
      <NavLink to="/history" className="mt-auto" activeClassName="font-bold">
        History
      </NavLink>
    </nav>
  );
};

export default Navbar;
