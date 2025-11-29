import React from "react";
import ProductCard from "./ProductCard";

const demoProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    subtitle: "Noise cancelling",
    price: "89",
    image:
      "https://images.unsplash.com/photo-1518444025287-6c1d1f78ef48?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
  },
  {
    id: 2,
    title: "Leather Backpack",
    subtitle: "Premium travel pack",
    price: "129",
    image:
      "https://images.unsplash.com/photo-1518304884441-04ed5a3c1f11?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
  },
  {
    id: 3,
    title: "Smart Watch",
    subtitle: "Fitness tracker",
    price: "199",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
  },
  {
    id: 4,
    title: "Scented Candle",
    subtitle: "Eco soy wax",
    price: "19",
    image:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
  },
];

const BestSelling = ({ products = demoProducts }) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Best selling</h2>
          <a className="text-sm text-indigo-600 hover:underline" href="#">
            See all
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
