import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-slate-800 text-left text-white font-semibold text-3xl py-5 px-4">
        <NavLink to="/" link="/">
          <h1>Shape Calculator</h1>
        </NavLink>
      </header>
      <hr></hr>
    </>
  );
};

export default Header;
