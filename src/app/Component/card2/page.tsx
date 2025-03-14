// import { PriceList} from "../../const/page";

import { PriceList } from "@/app/const/data";

const Card2 = () => {


    return ( 
        <>
        <div className=" p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  bg-[#F9F9F7] w-[85%] m-auto ">
        {
            PriceList.map((card, index) => (
                <div key={index} className="shadow-md  max-w-[306px]">
                    <img src={card.img}/>
                    <div className="p-4 bg-[#FFFFFF]   rounded-b-lg  text-center outline outline-[0.1px] outline-[#DBDFD0]">
                    <h3 className="font-sans pb-2 text-[#AD343E] font-bold text-2xl ">{card.price} </h3>
                    <h1 className="font-sans text-[#2C2F24] pb-2 font-bold text-xl  ">{card.name } </h1>
                    <p className="font-sans text-[#414536] pb-2 font-medium text-base  ">{card.description} </p>
                    </div>
                    
                </div>
                
            ))
        }
         </div>
        </div>
        </>
     );
}
 
export default Card2;