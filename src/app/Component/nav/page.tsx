import Link from "next/link";

const Nav = () => {
const List = [{home:"Home", about:"About", menue:"Menue", page:"Page", contact:"Contact"}] 

    return ( 

        <>
        <div>
            {List.map((list, index) => (
                <div key={index} className='hidden md:flex gap-4 text-sm font-Playfair'>
                    <Link href="" className='hover:text-[#AD343E]'>{list.home}</Link>
          <Link href="/aboutpage" className='hover:text-[#AD343E]'>{list.about}</Link>
          <Link href="/menupage" className='hover:text-[#AD343E]'>{list.menue}</Link>
          <Link href="/blogpage" className='hover:text-[#AD343E]'>{list.page}</Link>
          <Link href="/contactpage" className='hover:text-[#AD343E]'>{list.contact}</Link>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default Nav;