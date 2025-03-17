const MenueList = () => {
 const items = [
        { Label: "All", active:true},
        { Label: "Breakfast"},
        {  Label:" Main Dish"},
        {   Label:" Drinks"},
         {   Label:" Desserts"}
        
        ]

    return ( 
        <>
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
        </>
     );
}
 
export default MenueList;