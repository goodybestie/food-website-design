import React from "react";
import {SiAdidas, SiDeliveroo, SiDoordash, SiFoodpanda, SiInstacart,
} from "react-icons/si";

export default function OrderPage() {
  return (
    <div className="bg-[#F9F9F7]  mx-auto flex justify-center items-center  mt-10">
      <div className="flex flex-col lg:flex-row items-center w-[90%] mt-10 p-[25px]  justify-around gap-2">
        <div className="   text-center lg:text-start">
          <h2 className="text-[#2C2F24] text-2xl max-w-[350px] md:text-4xl lg:text-[40px] font-semibold mb-3 ">
            You can order through apps
          </h2>
          <p className="text-[#414536] text-[13px] mb-5 md:text-[16px] max-w-[350px] mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </p>
        </div>

        {/* App Buttons Grid */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:justify-items-center  md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Uber Eats */}
            <div className="p-4 bg-white text-xl text-center rounded-md shadow-xl">
              <button className="font-bold">
                Uber <span className="text-[#05C167]">Eats</span>
              </button>
            </div>

            {/* GRUBHUB */}
            <div className="p-4 bg-white text-xl text-center rounded-md shadow-lg text-[#F63440]">
              <button className="font-bold">GRUBHUB</button>
            </div>

            {/* Postmates */}
            <div className="p-4 bg-white text-xl text-center rounded-md shadow-lg text-[#000000]">
              <button className="font-bold">Postmates</button>
            </div>

            {/* DOORDASH */}
            <div className="p-4 bg-white text-xl rounded-md shadow-lg text-[#FF3008] flex justify-center items-center">
              <SiDoordash className="flex-none mr-2" />
              <button className="font-semibold">DOORDASH</button>
            </div>

            {/* Foodpanda */}
            <div className="p-4  bg-white text-xl rounded-md shadow-lg text-[#D70F64] flex justify-center items-center">
              <SiFoodpanda className="flex-none mr-2" />
              <button className="font-semibold">foodpanda</button>
            </div>

            {/* Deliveroo */}
            <div className="p-4  bg-white text-xl rounded-md shadow-lg text-[#00CCBC] flex justify-center items-center">
              <SiDeliveroo className="text-[#00CCBC] flex-none mr-2" />
              <button className="font-semibold">deliveroo</button>
            </div>

            {/* Instacart */}
            <div className="p-4  bg-white text-xl rounded-md shadow-lg text-[#43B02A] flex justify-center items-center">
              <SiInstacart className="text-[#FF8200] flex-none mr-2" />
              <button className="font-bold">instacart</button>
            </div>

            {/* JUSTEAT */}
            <div className="p-4 bg-white text-xl text-center rounded-md shadow-lg text-[#FF3131]">
              <button className="font-bold">JUSTEAT</button>
            </div>

            {/* DiDi Food */}
            <div className="p-4  bg-white text-lg rounded-md shadow-lg text-[#2C2F24] flex justify-center items-center">
              <SiAdidas className="text-[#FC9153] flex-none mr-2" />
              <button className="font-semibold">
                DiDi Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
