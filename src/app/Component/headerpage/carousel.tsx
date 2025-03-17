"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Bistro Bliss exceeded my expectations! The ambiance, the food, and the service were all top-notch. Can’t wait to come back!",
  },
  {
    name: "David R.",
    text: "I’ve tried many restaurants, but nothing compares to the flavors at Bistro Bliss. The chefs are truly masters of their craft!",
  },
  {
    name: "Linda & Mark T.",
    text: "The cozy atmosphere and gourmet dishes made our anniversary dinner magical. Highly recommend it!",
  },
  {
    name: "James P.",
    text: "From the warm welcome to the last bite, everything was perfect. A must-visit for food lovers!",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="bg-[#F9F9F7] p-5 mt-10">
      <div className="w-full max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
        <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2 },
  }}
  loop={true}
  autoplay={{ delay: 4000 }}
  pagination={{ clickable: true }}
  className=" "
>
  {testimonials.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between mb-10">
        <FaQuoteLeft className="text-4xl text-gray-400 mx-auto mb-4" />
        <p className="text-lg italic text-gray-700 flex-1">{testimonial.text}</p>
        <h3 className="mt-4 font-bold text-gray-900">- {testimonial.name}</h3>
      </div>
    </SwiperSlide>
  ))}
  
</Swiper>

      </div>
    </div>
  );
};

export default TestimonialCarousel;
