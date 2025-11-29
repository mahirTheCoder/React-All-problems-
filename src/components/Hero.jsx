import React from "react";

const Hero = () => {
  return (
    <section className=" from-indigo-50 via-white to-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover the best products — curated for you
          </h1>
          <p className="mt-4 text-gray-600 max-w-prose">
            Clean minimal design, fast checkout and free returns — everything to
            give your customers an exceptional shopping experience.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-md shadow hover:bg-indigo-700">
              Shop Best Sellers
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-md hover:bg-indigo-50">
              Browse Collections
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
            src="https://images.unsplash.com/photo-1520962910774-7d0a9b2b0b13?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1"
            alt="Products showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
