import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  const productImages = [
    " https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
    "https://www.bitesa.pk/wp-content/uploads/2020/11/bitesa-cheeze-flsvr-1-1.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7TXynkEOinB0590k1pVOgyi6xlsgfgri1A&s",
    "https://w7.pngwing.com/pngs/13/362/png-transparent-pizza-pizza-food-recipe-tomato-thumbnail.png",
 "https://static.vecteezy.com/system/resources/previews/041/281/374/non_2x/pizza-various-flavors-transparent-png.png",
"https://i.pinimg.com/736x/04/88/32/04883229aaa10693e1966b39142ad4a9.jpg",
  ];
  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyP7JhdtZfXJkISSILaWkGXsoQREdssn4lw&s")`,
          backgroundSize: "cover",
          backgroundPosition: "Center",
          zIndex: 0,
          opacity: 0.1,
        }}/>
      <h1 className="font-bol text-4xl mb-4 text-white z-10 relative">
        Most Requested Item
      </h1>
      <h1 className="text-3xl text-white z-10 relative"> Order Now..!</h1>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img
                src={productImages[index]}
                alt={`Product ${index + 1}`}
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-slate-500 mr-3 uppercase text-xs">
                  {" "}
                  Category
                </span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  Pizza Name {index + 1}
                </p>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    $149
                  </p>
                  <del>
                    <br />
                    <p className="text-sm text-blue-800 cursor-auto ml-2">
                      {" "}$199
                    </p>
                  </del>
                  <div className="ml-auto">
                    <FaShoppingCart className=" w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};
export default ProductCardGrid;
