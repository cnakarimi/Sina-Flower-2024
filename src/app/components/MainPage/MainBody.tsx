"use client";

import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import FlowerCard from "./FlowerCard";
import { supabase } from "../../../../lib/supabaseClient";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { motion } from "motion/react";
import Loading from "@/app/loading";

interface Plant {
  id: string;
  name: string;
  price: number;
  picture: string;
  width: number;
  height: number;
}

type SelectedCategoryProps = {
  selectedCategory: string;
};

const MainBodyPc: React.FC<SelectedCategoryProps> = ({ selectedCategory }) => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("plants").select("*");

      if (error) {
        console.error("Error fetching plants:", error);
      } else {
        setPlants(data as Plant[]);
      }
      setLoading(false);
    };
    fetchPlants();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <div className="flex items-center justify-center">
            <Image
              width={200}
              height={200}
              alt="loading"
              src="/android-chrome-512x512.png"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl font-semibold"
          >
            ...در حال بارگذاری
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray md:block flex-1 hidden">
        <div className="flex justify-end pt-12 px-6 md:hidden">
          <IoSearch className="w-8 h-8 text-black text-opacity-80" />
        </div>
        <h2 className="text-4xl px-6 mt-12 font-extrabold">پیشنهادی</h2>

        <div className="rounded-2xl m-5 w-[90vw] h-auto mx-auto">
          <Swiper
            dir="rtl"
            slidesPerView={3}
            centeredSlides={false}
            slidesOffsetAfter={50}
            loop={true}
            spaceBetween={10}
            breakpoints={{
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1536: { slidesPerView: 6 },
            }}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {plants.map((flower, id) => (
              <SwiperSlide
                className="rounded-2xl m-5 w-full min-h-[300px] pb-5 swiper-slide"
                key={id}
              >
                <FlowerCard flower={flower} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2 className="text-4xl px-6 mt-12 font-extrabold">فیکوس</h2>

        <div className="rounded-2xl m-5 w-[90vw] h-auto mx-auto">
          <Swiper
            dir="rtl"
            slidesPerView={3}
            centeredSlides={false}
            slidesOffsetAfter={50}
            loop={true}
            spaceBetween={10}
            breakpoints={{
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1536: { slidesPerView: 6 },
            }}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {plants.map((flower, id) => (
              <SwiperSlide
                className="rounded-2xl m-5 w-full min-h-[300px] pb-5 swiper-slide"
                key={id}
              >
                <FlowerCard flower={flower} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2 className="text-4xl px-6 mt-12 font-extrabold">کاکتوس</h2>

        <div className="rounded-2xl m-5 w-[90vw] h-auto mx-auto">
          <Swiper
            dir="rtl"
            slidesPerView={3}
            centeredSlides={false}
            slidesOffsetAfter={50}
            loop={true}
            spaceBetween={10}
            breakpoints={{
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1536: { slidesPerView: 6 },
            }}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {plants.map((flower, id) => (
              <SwiperSlide
                className="rounded-2xl m-5 w-full min-h-[300px] pb-5 swiper-slide"
                key={id}
              >
                <FlowerCard flower={flower} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="bg-gray flex-1 mr-20 md:hidden">
        <div className="flex justify-end pt-12 px-6">
          <IoSearch className="w-8 h-8 text-black text-opacity-80" />
        </div>
        <h2 className="text-4xl px-6 mt-12 font-extrabold">
          {selectedCategory}
        </h2>
        <div className="grid sm:grid-cols-2 items-center justify-center mt-8 mb-32">
          {plants.map((flower, id) => (
            <motion.div
              className="bg-white rounded-2xl m-5 min-h-[300px]  w-fit"
              key={id}
              initial={{ opacity: 0, y: 10 }} // Start with the element off-screen
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position when in view
              viewport={{ amount: 0.1 }} // Trigger animation when 30% of the element is visible
              transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
            >
              <FlowerCard flower={flower} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainBodyPc;

{
  /* 
      <h2 className="text-4xl px-6 mt-12 font-extrabold">خانه</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center mt-12 mb-32">
        {plants.map((flower, id) => (
          <div
            className="bg-white rounded-2xl m-5 w-52 min-h-[300px] p-5"
            key={id}
          >
            <FlowerCard flower={flower} />
          </div>
        ))}
      </div>
     */
}
