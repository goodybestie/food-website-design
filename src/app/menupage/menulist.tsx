"use client";

import { useState } from "react";
import { PriceList } from "@/app/Component/const/menuedata";

const MenueList = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "Breakfast", "Main Dish", "Drinks", "Desserts"];
    const filteredItems = selectedCategory === "All" ? PriceList : PriceList.filter(item => item.category === selectedCategory);

    return (
        <div className="mt-6">
            <div className="flex flex-wrap gap-3 justify-center mb-5">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-[15px] lg:rounded-full p-2
                             flex flex-wrap text-xs lg:text-[13px]
                              items-center justify-center
                               text-[#2C2F24]
                                font-bold w-[40%]
                                 md:w-[12%]
                                  lg:w-[10%] 
                                  ${selectedCategory === category ? "bg-[#AD343E] text-white" : "outline outline-1 outline-[#DBDFD0]"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 mt-[55px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-[#F9F9F7] w-[85%] m-auto">
  {filteredItems.length > 0 ? (
    filteredItems.map((card, index) => (
      <div key={index} className="shadow-md max-w-[306px]">
        <img src={card.img} alt={card.name} />
        <div className="p-4 bg-[#FFFFFF] rounded-b-lg text-center outline outline-[0.1px] outline-[#DBDFD0]">
          <h3 className="font-sans pb-2 text-[#AD343E] font-bold text-2xl">{card.price}</h3>
          <h1 className="font-sans text-[#2C2F24] pb-2 font-bold text-xl md:text-lg lg:text-[16px]">{card.name}</h1>
          <p className="font-sans text-[#414536] font-medium text-base">{card.description}</p>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500 col-span-full">No items available in this category.</p>
  )}
</div>

        </div>
    );
};

export default MenueList;
