import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex gap-6">
        <img className="logo-img" src="./assets/logo.png" alt="logo picture" />
        <h1 className="logo-title">
          Dev<span className="font-extrabold">Board</span>
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 primary-bg rounded-xl p-3">
          <img src="./assets/checkbox.png" alt="checkbox" />
          <h1 id="done-task">23</h1>
        </div>
        <img
          id="colorBtn"
          className="theme-btn-img primary-bg rounded-full p-2"
          src="./assets/theme-btn.png"
          alt="theme button"
        />
      </div>
    </nav>
  );
};

export default Navbar;
