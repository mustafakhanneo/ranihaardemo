"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { Autoplay, Navigation, Pagination  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Product = {
    url: string;
    title: string;
    clothes: boolean;
    accessories: boolean;
    price: number;
    tags: string[];
    description: string;
  };

const Bestseller = () => {
    const [options, setOptions] = useState<'clothes' | 'accessories'>("clothes");
    const [selectedVariation, setSelectedVariation] = useState("")
    const swiperRef = useRef<SwiperCore>(); 
    const [currentIndex, setCurrentIndex] = useState<number>(swiperRef.current?.realIndex ?? 0)
    const handleIndex = () => {
        if (swiperRef.current?.realIndex !== undefined) {
          setCurrentIndex(swiperRef.current.realIndex);
          console.log(swiperRef.current);
        }
      };

    const products = [
      {
        url: "https://picsum.photos/300/449",
        title: "Maharaani Haar",
        clothes: true,
     accessories: false,
        price: 5478,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/299/450",
        title: "Kohinoor Bali",
        clothes: false,
     accessories: true,
        price: 4800,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/299/449",
        title: "Bareli Jhumka",
        clothes: true,
     accessories: false,
        price: 700,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/300/450",
        title: "Jahanaara Bangels",
        clothes: false,
     accessories: true,
        price: 580,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/300/451",
        title: "Albela Earing",
        clothes: true,
     accessories: false,
        price: 100,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/301/450",
        title: "Ankh Ka Tara",
        clothes: false,
     accessories: true,
        price: 800,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/301/451",
        title: "Daasi Wear",
        clothes: true,
     accessories: false,
        price: 800,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      {
        url: "https://picsum.photos/299/451",
        title: "Jeeka Bai Haar",
        clothes: false,
       accessories: true,
        price: 400,
        tags : ["new", "custom"],
        description: "Embrace the Chill in Elegance! Explore our Winter Collection, featuring cozy knits, luxurious layers, and sophisticated styles to keep you warm and fashionable. From snug sweaters to stylish coats, find everything you need to stay stylish this winter."
      },
      
      ]
  return (
    <div className='flex flex-col px-4 bg-white mb-4'>
        <div className='flex justify-start text-black font-tanker mb-4 mt-2 lg:text-2xl md:text-lg text-sm'>
        <p>Best Seller</p>
        </div>
        <div className='tabs'>
    <div className="flex flex-row justify-between border-b mb-4 border-gray-200">
      <div className="-mb-px flex gap-6" aria-label="Tabs">
        <button
          onClick={() => setOptions('clothes')}
          className={`shrink-0 border-b-2 px-1 pb-2 text-sm font-archivo ${options === 'clothes' ? 'text-secondary border-secondary' : 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 '}`}
        >
          Necklaces
        </button>

        <button
          onClick={() => setOptions('accessories')}
          className={`shrink-0 border-b-2 px-1 pb-2 text-sm font-archivo ${options === 'accessories' ? 'text-secondary border-secondary' : 'text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 '}`}
        >
          Accessories
        </button>
      </div>
      <div className='flex flex-row items-center'>
        <button onClick={() => swiperRef.current?.slidePrev()} className="text-black/50 hover:text-white hover:bg-black/60 p-2 rounded-full"><IoChevronBackOutline /></button>
        <button onClick={() => swiperRef.current?.slideNext()} className="text-black/50 hover:text-white hover:bg-black/60 p-2 rounded-full"><IoChevronForwardOutline /></button>
    </div>
</div>
        </div>
        <div>
        <Swiper
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        loop
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            375: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        modules={[Autoplay, Navigation, Pagination]}
        onSlideChange={handleIndex}
        onSwiper={(swiper) => console.log(swiper)}
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
        {products && products
        .filter(item => item[options])
        .map((item, index) => (
      <SwiperSlide key={index}>
        <div className="group block border">
  <img
    src={item.url}
    alt=""
    className="lg:h-[450px] md:h-[350px] h-[250px] w-full object-cover sm:h-[450px]"
  />

<div className="mt-3 flex justify-start lg:text-lg md:text-md text-sm px-2">
      <h3 className="text-gray-900 font-semibold font=archivo group-hover:underline group-hover:underline-offset-4 group-hover:text-secondary">
        {item.title}
      </h3>
    </div>

  <div className="mt-1.5 px-2">
    <p className="text-xs font-archivo text-gray-500">Select Variations</p>

    <div className="mt-1.5 flex justify-between items-center gap-1">

    <select
  value={selectedVariation}
  onChange={(e) => setSelectedVariation(e.target.value)}
  className='flex rounded-lg w-2/4 md:w-1/2 lg:w-1/3 text-sm md:text-sm lg:text-md font-archivo focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary border border-gray-300 py-1 px-2'
>
  <option value="" disabled>Select Variation</option>
  <option value="Silver">Silver</option>
  <option value="Gold">Gold</option>
  <option value="Platinum">Platinum</option>
</select>

      <p className="text-gray-900 font=archivo font-semibold lg:text-md md:text-md text-sm" >Rs {item.price}</p>
    </div>
    <div className="mt-3 flex justify-between mb-4 lg:text-sm md:text-sm text-xs">
      <button className='border border-black text-black rounded-lg lg:px-4 md:px-4 px-2 py-2 font-archivo hover:bg-black/80 hover:text-white'>Add to Cart</button>
      <button className='bg-secondary rounded-lg lg:px-4 md:px-4 px-2 py-2 text-white font-archivo hover:bg-black/80'>Buy Now</button>
    </div>
  </div>
</div>
      </SwiperSlide>))}

        </Swiper>
        </div>
    </div>
  )
}

export default Bestseller