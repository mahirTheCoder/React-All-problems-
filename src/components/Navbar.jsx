import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-indigo-600">ShopMahir</div>
          <span className="text-sm text-gray-500">Your online store</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <a className="hover:text-indigo-600" href="#">
            Home
          </a>
          <a className="hover:text-indigo-600" href="#">
            Shop
          </a>
          <a className="hover:text-indigo-600" href="#">
            Categories
          </a>
          <a className="hover:text-indigo-600" href="#">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline-block bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">
            Sign in
          </button>
          <button className="flex items-center gap-2 border rounded-md px-3 py-1 text-sm hover:shadow">
            <span>🛒</span>
            <span className="text-sm font-medium">Cart</span>
            <span className="ml-1 text-xs text-gray-500">(0)</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
