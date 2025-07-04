// "use client";
// import CategoryCard from "@/components/Category/CategoryCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import Link from "next/link";
// import React, { useRef } from "react";
// import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
// import { useMediaQuery } from "react-responsive";
// import {
//   MdTv,
//   MdSmartphone,
//   MdTabletMac,
//   MdLaptop,
//   MdDevices,
//   MdVolumeUp,
// } from "react-icons/md";
// import { FaLaptopHouse } from "react-icons/fa";
// import { MdOutlineWatch } from "react-icons/md";

// const categories = [
//   { id: 1, icon: MdTv, name: "Smart TV" },
//   { id: 2, icon: MdSmartphone, name: "Smartphone" },
//   { id: 3, icon: MdTabletMac, name: "Tab" },
//   { id: 4, icon: MdLaptop, name: "Laptop" },
//   { id: 5, icon: MdOutlineWatch, name: "Smartwatch" },
//   { id: 6, icon: MdDevices, name: "Gadgets" },
//   { id: 7, icon: MdVolumeUp, name: "Sound Applicant" },
//   { id: 8, icon: FaLaptopHouse, name: "Household Device" },
//   { id: 9, icon: FaLaptopHouse, name: "Household Device" },
//   { id: 10, icon: FaLaptopHouse, name: "Household Device" },
// ];

// const Category = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const cardToShow = isMobile ? 6 : 7;

//   return (
//     <div className="mt-16">
//       <div className="flex justify-between">
//         <h1 className="text-[#000000] font-semibold inter text-[16px] md:text-4xl">
//           Browse By Category
//         </h1>

//         <div className="hidden md:flex gap-2 mr-35">
//           <button ref={prevRef} className="btn btn-circle">
//             <IoMdArrowBack size={25} />
//           </button>
//           <button ref={nextRef} className="btn btn-circle">
//             <IoMdArrowForward size={25} />
//           </button>
//         </div>
//       </div>

//       <div>
//         <Swiper
//           breakpoints={{
//             320: {
//               slidesPerView: 3,
//             },
//             768: {
//               slidesPerView: 7,
//             },
//           }}
//           spaceBetween={30}
//           modules={[Navigation]}
//           navigation={{
//             prevEl: prevRef.current,
//             nextRef: nextRef.current,
//           }}
//           onBeforeInit={(Swiper) => {
//             Swiper.params.navigation.prevEl = prevRef.current;
//             Swiper.params.navigation.nextEl = nextRef.current;
//           }}
          
//           className="mySwiper"
//         >
//           {categories?.map((category) => (
//             <SwiperSlide>
//               <Link href="/category">
//                 <CategoryCard key={category.id} category={category} />
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* <Link
//         href="/category"
//         className="grid grid-cols-3 md:grid-cols-7 gap-5 md:gap-6"
//       >
//         {categories?.slice(0, cardToShow).map((category) => (
//           <CategoryCard key={category.id} category={category} />
//         ))}
//       </Link> */}

//       <Link
//         href="/category"
//         className="flex flex-col justify-center items-center md:hidden"
//       >
//         <button className="  btn border-2 border-[#0074DE] text-[#0074DE] hover:text-white hover:bg-[#0074DE] py-1 md:py-[2px] px-12 md:px-12 mt-7">
//           View All
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Category;
