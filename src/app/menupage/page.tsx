import Card2 from "../Component/card2/page";
import Headers from "../Component/headerpage/Header";
import OrderPage from "../Component/ordersite";

const MenuPage = () => {

    const items = [
        { Label: "All", active:true},
        { Label: "Breakfast"},
        {  Label:" Main Dish"},
        {   Label:" Drinks"},
         {   Label:" Desserts"}
        
        ]
    return (
        <>
            <div>

                <Headers h1="Our Menu" />


                <div className=" flex flex-wrap gap-3 justify-center mb-[17px]">
                {items.map((item, index) => (
            <button
              key={index}
              className={`rounded-[15px] p-2 text-xs text-[#2C2F24] font-bold font-arial w-[25%] md:w-[10%] lg:w-[8%] ${
                item.active
                  ? "bg-[#AD343E] text-white"
                  : "outline outline-1 outline-[#DBDFD0] text-[black]"
              }`}
            >
              {item.Label}
            </button>
          ))}

                </div>
            </div>
            <Card2 />
            <OrderPage />
        </>
    );
}

export default MenuPage;