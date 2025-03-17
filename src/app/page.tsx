// import Image from "next/image";
import TestimonialCarousel from "./Component/headerpage/carousel";
import Headers from "./Component/headerpage/Header";
import HeaderMain from "./Component/headerpage/headermain";


export default function Home() {
  return (
    <>
    <div >
      
     
    <Headers h1="Our Home" />
    <HeaderMain />
    <TestimonialCarousel />
    </div>
    </>
  );
}
