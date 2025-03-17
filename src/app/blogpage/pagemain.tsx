
import { Cards } from "@/app/Component/const/data1";

const PageMain = () => {


    return ( 
        <>
        <div className="bg-[#F9F9F7] p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center  gap-5  bg-[#F9F9F7] w-[85%] m-auto ">
        {
            Cards.map((card, index) => (
                <div key={index} className="shadow-lg max-w-[306px]">
                    <img src={card.img}/>
                    <div className="p-4 bg-[#FFFFFF]  rounded-md">
                    <p className="text-sm  text-[#737865] font-medium pb-2">{card.Date} </p>
                    <h2 className=" color-[#2c2f24] text-[#2C2F24]
                    font-medium text-base font-dmSans md:text-xl mt-2  ">{card.Description} </h2>
                    </div>
                    
                </div>
                
            ))
        }
         </div>
        </div>
        </>
     );
}
 
export default PageMain;