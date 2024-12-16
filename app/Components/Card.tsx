import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Pizza </h2>
        <p className="text-white mb-4">
         {" "}
         Experience the mouth-filling flavors of the toppings on the pizza's,
         made with fresh and flavorful ingredients and grilled to perfection.{" "}
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
          Order Now
        </button>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
         {" "}
          Coming Soon: Our New Pizza Launches{" "}
        </h3>
<ul>
    <li>
        {" "} <strong>  BBQ Chicken Pizza:</strong>
        Topped with spicy BBQ chicken, onions, and a blend of cheeses, this
        pizza combines the smoky flavor of barbecue with a savory crust.
    </li>
    <br />

    <li> 
        {" "}
        <strong> Tandoori Chicken Pizza: </strong>
        Marinated tandoori chicken pieces are paired with a tangy sauce and
            fresh vegetables, bringing the traditional tandoori flavor to a
            cheesy base.
    </li>
    
    <br />

    <li> 
        {" "}
        <strong> Keema Pizza:</strong>
        Ground meat (usually beef or mutton) cooked with spices is spread
            over the pizza, often topped with onions, green chilies, and a
            drizzle of yogurt for added creaminess.
    </li>
    <br />

    <li>
        {" "}
         <strong> Paneer Tikka Pizza:</strong>
         Grilled paneer marinated in spices is combined with bell peppers and
         onions, offering a vegetarian twist that’s rich in flavor.
    </li>
    <br />

    
    <br />
    </ul>
    </div>
<div className="md:w-1/2 mt-6 md:mt-0">
<img src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-handdrawn-pizza-menu-with-ingredients-tools
-delivery-options-vector-png-image_34012674.png"
alt="Delicious pizza"
className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7" />

</div>
      
    </section>
  );
};
export default FloatingImageContentBlock;
