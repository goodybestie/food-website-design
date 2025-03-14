// import { PriceList} from "../../const/page";

import { PriceList } from "@/app/const/data";

const Card2 = () => {


    return ( 
        <>
        <div className=" p-10">
            <div className="grid md:grid-cols-4 sm:grid-cols-1  gap-5  bg-[#F9F9F7] w-[85%] m-auto ">
        {
            PriceList.map((card, index) => (
                <div key={index} className="">
                    <img src={card.img}/>
                    <div className="p-4 bg-[#FFFFFF]  rounded-lg  text-center outline outline-[0.1px] outline-[#DBDFD0]">
                    <h3 className="font-sans pb-2 text-[#AD343E] font-bold text-base ">{card.price} </h3>
                    <h1 className="font-sans text-[#2C2F24] pb-2 font-medium text-sm  ">{card.name } </h1>
                    <p className="font-sans text-[#414536] pb-2 font-light text-sm  ">{card.description} </p>
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