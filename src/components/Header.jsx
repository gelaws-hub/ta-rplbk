import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="text-xl text-center bg-slate-800 md:text-left text-white font-semibold md:text-3xl py-5 px-4 shadow-md">
        <NavLink to="/" link="Homepage">
          <h1>Shape Calculator</h1>
        </NavLink>
      </header>
    </>
  );
};

export default Header;
