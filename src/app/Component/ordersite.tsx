import { SiDoordash,SiDeliveroo,SiFoodpanda,  SiInstacart  } from "react-icons/si";

const OrderPage = () => {
    return ( 
        <>
        <div className="bg-[#F9F9F7] mt-10  ">

            <div className=" p-8  flex  flex-col md:flex-row  justify-around gap-10   ">
            <div className="p-5">
                <h1 className="text-[#2C2F24] text-3xl sm:text-4xl md:text-5xl mb-5 font-arial">You can order <br /> through apps</h1>
                <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit enim bibendum sed et aliquet aliquet <br/> risus tempor semper.</p>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-5  ">
                <p className="bg-white rounded-md shadow-lg p-4 ">Urber Eats</p>
                <p className="bg-white rounded-md shadow-lg p-4 text-[#F63440] font-bold ">GRUBHUB</p>
                <p className="bg-white rounded-md shadow-lg p-4 text-[ #F63440] font-bold ">Postmates</p>
                
                <div className="bg-white rounded-md shadow-lg p-4 text-[#FF3008] font-bold flex gap-2 items-center">
                <SiDoordash  className="color-[#FF3008]"/>
                <p className="text-[#FF3008] font-bold">
                     DOORDASH</p>

                </div>
                   

                <div className="bg-white rounded-md shadow-lg p-4 flex gap-2 items-center">
                <SiFoodpanda className="color-[#D70F64]"/>
                <p className=" font-bold text-[#D70F64]"> 
                foodpanda</p>
                </div>
                <div className="bg-white rounded-md shadow-lg p-4 text-[#00CCBC] font-bold flex gap-2 items-center">
                     <SiDeliveroo className="color-[#00CCBC]"/>
                <p className=" text-[#00CCBC] font-bold">deliveroo</p>
                </div>
                <div className="bg-white rounded-md shadow-lg p-4 text-[#00CCBC] font-bold flex gap-2 items-center">
                <SiInstacart className="color-[#43B02A]" />
                <p className="text-[#43B02A] font-bold"> instacart</p>
                </div>
                
                <p className="bg-white rounded-md shadow-lg p-4 text-[#FF3131] font-bold ">JUST EAT</p>
                <div className="bg-white rounded-md shadow-lg p-4 text-[#00CCBC] font-bold flex gap-2 items-center" >
                <SiInstacart className="color-[#FC9153]" />
                
                <p className="w-full sm:w-48 md:w-auto"> DiDi Food</p>
                </div>

            </div>
        </div>
        </div>
        </>
     );
}
 
export default OrderPage;