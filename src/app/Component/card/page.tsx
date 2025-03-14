import { Cards } from "../pagearray/page";

const Card = () => {


    return ( 
        <>
        <div className="bg-[#F9F9F7] p-10">
            <div className="grid md:grid-cols-4 sm:grid-cols-1  gap-5  bg-[#F9F9F7] w-[85%] m-auto ">
        {
            Cards.map((card, index) => (
                <div key={index} className="shadow-lg">
                    <img src={card.img}/>
                    <div className="p-4 bg-[#FFFFFF]  rounded-md">
                    <p className="text-sm font-sans pb-2">{card.Date} </p>
                    <h2 className="font-sans color-[#2c2f24] font-medium text-base  ">{card.Description} </h2>
                    </div>
                    
                </div>
                
            ))
        }
         </div>
        </div>
        </>
     );
}
 
export default Card;