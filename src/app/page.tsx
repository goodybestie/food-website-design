// import Image from "next/image";
import TestimonialCarousel from "./headerpage/carousel";
import Headers from "./headerpage/Header";
import HeaderMain from "./headerpage/headermain";


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
