import Link from "next/link";
import React from "react";
import { CiPizza } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
export default function Navbar(){
    return(
        <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/*logo pizza*/}
                
                <CiPizza  className="w-10 h-10 text-red-500 hover:text-fuchsia-500" />
                {/*search Icon*/}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Search for your favourite pizza flavour from menu."
                  />
                  <FaSearch className="w-5 h-5 text-sky-400 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>

              <div className="flex justify-center items-center gap-2">
                <FaBolt className=" w-5 h-5 text-amber-500 hidden lg:block md:block" />
                <p className="text-sm text-white hidden lg:block md:block">
                  {" "}
                  order now and get it with
                  <span className="text-amber-400"> 15 minuts!</span>
                </p>
              </div>
              {/*cart icon*/}
              <FaCartShopping className="p-1 w-8 h-8 rounded-full ring-2 relative text-cyan-400 hover:text-amber-400" />
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
