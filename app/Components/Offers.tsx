
"use client"
import React from "react";

type Offer = {
    title: string;
    description: string;
}
const SpecialOffers:React.FC = () => {
const offer:Offer[] = [
    {
    title:" Happy Hour",
    description:"6PM to 8PM ,50% off on all drinks "
    },
    {
        title:" Family Meal Deal",
        description:"Order 2 main courses and get 1 family deal coupon code"
        },
        {
            title:"Sunday Offer",
            description:"1 complimentary drink free "
            },
            {
                title:"Midnight Deal",
                description:"Order 2 large pizza and awail 1 Small pizza"
                },
];
const handleOfferClick = (description: string) => {
    alert(description);
}
return (
    <section className="py-10">
<div className="container mx-auto text-center">
<h2 className="text-4xl font-bold mb-6 text-white">Special Offer's</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {offer.map ((offer, index) => (
      <button key= {index}
      onClick={() => handleOfferClick(offer.description) }
      className="bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-red-700"> {offer.title}</h3>
<p className="text-slate-700 mt-3">{offer.description}</p>
      </button>  
    ))}

</div>
</div>
    </section>
)
}

export default SpecialOffers