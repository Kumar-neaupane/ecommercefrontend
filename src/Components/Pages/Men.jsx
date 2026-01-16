import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Men = () => {
  const menProducts = [
    {
      id: 1,
      name: "Product 1",
      price: "$50",
      size: "L",
      color: "Black",
      stockStatus: "In Stock",
      src: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$60",
      size: "M",
      color: "Blue",
      stockStatus: "In Stock",
      src: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$70",
      size: "S",
      color: "Red",
      stockStatus: "Out of Stock",
      src: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$80",
      size: "XL",
      color: "Green",
      stockStatus: "In Stock",
      src: "/images/product4.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: "$90",
      size: "L",
      color: "Yellow",
      stockStatus: "In Stock",
      src: "/images/product5.jpg",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Main Layout */}
      <div className="flex gap-8 px-6 py-10">
        {/* Sidebar Filter */}
        <div className="w-56 p-6 border border-gray-200 rounded-lg">
          <h1 className="font-bold text-lg mb-6 text-blue-500 text-center">
            FILTER BY COLOR
          </h1>

          <div className="space-y-3">
            <p className="flex items-center gap-2 cursor-pointer">
              <span className="w-5 h-5 bg-black rounded-full"></span> Black
            </p>
            <p className="flex items-center gap-2 cursor-pointer">
              <span className="w-5 h-5 bg-yellow-700 rounded-full"></span> Brown
            </p>
            <p className="flex items-center gap-2 cursor-pointer">
              <span className="w-5 h-5 bg-white border rounded-full"></span> White
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />

              <h2 className="font-semibold mt-3">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <p className="text-sm">Size: {product.size}</p>
              <p className="text-sm">Color: {product.color}</p>
              <p
                className={`text-sm font-semibold ${
                  product.stockStatus === "In Stock"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.stockStatus}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Men;
