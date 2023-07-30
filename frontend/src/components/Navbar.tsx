import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8   py-2 flex flex-row items-center justify-between ">
      <div className="flex flex-row items-center space-x-5">
        <img src="https://i.ibb.co/F7bvD64/Logo-1.png" />
        <div className="hidden  md:flex flex-row items-center justify-center space-x-5">
          <Link to="/">Women</Link>
          <Link to="/">Men</Link>
          <Link to="/">Company</Link>
          <Link to="/">Stores</Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-5 ">
        <div className="cursor-pointer ">Create an account</div>
        <MagnifyingGlassIcon className="h-6 w-6" />
        <ShoppingBagIcon className="h-6 w-6" />
      </div>
    </nav>
  );
}

export default Navbar;
