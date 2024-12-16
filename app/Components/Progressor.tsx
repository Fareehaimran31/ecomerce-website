import React from "react";

export default function Progressor(){
    return(
        <div>
<div className="flex items-start max-w-screen-lg w-full mx-auto mt-10">
<div className="w-full">
<div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 max-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-base text-black font-bold">1</span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
        </div>
        <div className="mt-2 mr-4">
          <h6 className="text-base font-bold text-amber-500">
            step 1: Choose your flavour{" "}
          </h6>
          <p className="text-xs text-yellow-50">
            Explore our delicious menu and select your favourite Pizza.
          </p>
        </div>
      </div>
      
        <div className="w-full">
          <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 max-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-base text-black font-bold">2</span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-400"></div>
        </div>
        <div className="mt-2 mr-4">
          <h6 className="text-base font-bold text-amber-400">
            step 2: select your order{" "}
          </h6>
          <p className="text-xs text-white">
            Tailor your meal to your taste!
          </p>
        </div>
      </div>
      
        <div className="w-full">
          <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 max-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-base text-black font-bold">3 </span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
        </div>
        <div className="mt-2 mr-4">
          <h6 className="text-base font-bold text-amber-500">
            step 3: Place your order now{" "}
          </h6>
          <p className="text-xs text-yellow-50">
            Ready to eat? Proccced to checkout and complete your order!
          </p>
</div>
</div>
 </div>
 </div>
    );
}