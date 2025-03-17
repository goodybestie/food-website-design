import React from "react";
import {
  SiAdidas,
  SiDeliveroo,
  SiDoordash,
  SiFoodpanda,
  SiInstacart,
} from "react-icons/si";

export default function OrderPage() {
  return (
    <div className="bg-[#F9F9F7] py-10 px-5 md:px-[110px] mt-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="max-w-[550px] w-full text-center lg:text-start">
          <h2 className="text-[#2C2F24] text-2xl md:text-4xl lg:text-6xl font-semibold my-2 md:my-5">
            You can order through apps
          </h2>
          <p className="text-[#414536] text-[13px] md:text-[16px] max-w-[550px] mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </p>
        </div>

        {/* App Buttons Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Uber Eats */}
            <div className="px-4 py-3 bg-white text-xl text-center rounded-md shadow-xl">
              <button className="font-bold">
                Uber <span className="text-[#05C167]">Eats</span>
              </button>
            </div>

            {/* GRUBHUB */}
            <div className="px-4 py-3 bg-white text-xl text-center rounded-md shadow-lg text-[#F63440]">
              <button className="font-bold">GRUBHUB</button>
            </div>

            {/* Postmates */}
            <div className="px-4 py-3 bg-white text-xl text-center rounded-md shadow-lg text-[#000000]">
              <button className="font-bold">Postmates</button>
            </div>

            {/* DOORDASH */}
            <div className="px-6 py-3 bg-white text-xl rounded-md shadow-lg text-[#FF3008] flex justify-center items-center">
              <SiDoordash className="flex-none mr-2" />
              <button className="font-semibold">DOORDASH</button>
            </div>

            {/* Foodpanda */}
            <div className="px-6 py-3 bg-white text-xl rounded-md shadow-lg text-[#D70F64] flex justify-center items-center">
              <SiFoodpanda className="flex-none mr-2" />
              <button className="font-semibold">foodpanda</button>
            </div>

            {/* Deliveroo */}
            <div className="px-6 py-3 bg-white text-xl rounded-md shadow-lg text-[#00CCBC] flex justify-center items-center">
              <SiDeliveroo className="text-[#00CCBC] flex-none mr-2" />
              <button className="font-semibold">deliveroo</button>
            </div>

            {/* Instacart */}
            <div className="px-6 py-3 bg-white text-xl rounded-md shadow-lg text-[#43B02A] flex justify-center items-center">
              <SiInstacart className="text-[#FF8200] flex-none mr-2" />
              <button className="font-bold">instacart</button>
            </div>

            {/* JUSTEAT */}
            <div className="px-4 py-3 bg-white text-xl text-center rounded-md shadow-lg text-[#FF3131]">
              <button className="font-bold">JUSTEAT</button>
            </div>

            {/* DiDi Food */}
            <div className="px-6 py-3 bg-white text-lg rounded-md shadow-lg text-[#2C2F24] flex justify-center items-center">
              <SiAdidas className="text-[#FC9153] flex-none mr-2" />
              <button className="font-semibold">
                DiDi <span className="ml-2">Food</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
