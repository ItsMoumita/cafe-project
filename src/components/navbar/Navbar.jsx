import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center shadow px-4">
      <div className="flex gap-6">
        <h1 className="logo-title text-2xl font-bold">
          Dev<span className="font-extrabold text-amber-300">Board</span>
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 primary-bg rounded-xl p-3 text-lg gap-8">
          <a href="">Home</a>
          <a href="">Flags</a>
          <a href="">Free country</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
