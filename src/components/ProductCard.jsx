import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
      <div className="w-full h-44 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.subtitle}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-bold text-indigo-600">
            ${product.price}
          </div>
          <button className="text-sm border px-3 py-1 rounded-md hover:bg-indigo-50">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
