import React from "react";

const products =[
    {
      id:1,
      title:"mexican pizza",
      category:"fixing",
      price:"500",
      imageUrl:"https://i.pinimg.com/474x/b2/ac/02/b2ac020b9907d15b37f39b31902be15e.jpg",

      bgColor:"bg-amber-500"
    },

    {
        id:2,
        title:"Italian pizza",
        category:"delight",
        price:"1500",
        imageUrl:"https://static.vecteezy.com/system/resources/previews/022/149/342/non_2x/hot-italian-pizza-cutout-png.png",
        bgColor:"bg-teal-500"
      },

      {
        id:3,
        title:"Special pizza",
        category:"fixing",
        price:"2000",
        imageUrl:
 "https://clipart-library.com/new_gallery/452976_cheese-pizza-png.png",
        bgColor:"bg-amber-500"
      },
]



export default function ProductList() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={
            `flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg-group max-w-sm`
          }
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              className="relative w-50"
              src={product.imageUrl}
              
              alt={product.title}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-orange-400 text-xs font-bold px-3 py-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
