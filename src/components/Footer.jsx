import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="text-xl font-bold text-indigo-600">ShopMahir</div>
          <p className="text-sm text-gray-600 mt-2">
            © {new Date().getFullYear()} ShopMahir — All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm text-gray-600">
          <div>
            <div className="font-semibold">Company</div>
            <div className="mt-2">About · Careers · Contact</div>
          </div>

          <div>
            <div className="font-semibold">Help</div>
            <div className="mt-2">Shipping · Returns · FAQ</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
