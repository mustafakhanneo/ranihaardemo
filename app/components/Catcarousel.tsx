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

const Catcarousel = () => {
    const swiperRef = useRef<SwiperCore>(); 
    const [currentIndex, setCurrentIndex] = useState<number>(swiperRef.current?.realIndex ?? 0)
    const [isHover, setIsHover] = useState(false);
    const [barProgress, setBarProgress] = useState<number>(0);

    const onAutoplayTimeLeft = (s: SwiperCore, progress: number, percentage: number) => {
       setBarProgress((1 - percentage)*100);
    };
  
    const handleIndex = () => {
        if (swiperRef.current?.realIndex !== undefined) {
          setCurrentIndex(swiperRef.current.realIndex);
          console.log(swiperRef.current);
        }
      };
     
      const catcarousel = [
        {
          url: "https://picsum.photos/100/99",
          title: "Necklace",
          description: "Add a touch of elegance to any outfit with our stunning necklace collection. Explore a range of designs from delicate pendants to statement pieces, perfect for every occasion. Elevate your style with the perfect necklace."
        },
        {
          url: "https://picsum.photos/99/100",
          title: "Earing",
          description: "Discover our exquisite earring collection, where sophistication meets style. Choose from a variety of designs, from classic studs to bold hoops, to complement your look and make a statement."
        },
        {
          url: "https://picsum.photos/99/99",
          title: "Hands Wear",
          description: "Explore our stylish range of hand wear, including gloves and wrist accessories, designed for both function and fashion. Find the perfect pair to keep your hands warm and stylish."
        },
        {
          url: "https://picsum.photos/101/100",
          title: "Bridal",
          description: "Find the perfect bridal accessories to complete your wedding look. Our collection features elegant pieces that add a touch of glamour and grace to your special day."
        },
        {
          url: "https://picsum.photos/100/101",
          title: "Mugliya",
          description: "Embrace the rich heritage and intricate designs of Mugliya fashion. Discover pieces that blend tradition with modern elegance, perfect for making a unique fashion statement."
        },
        {
          url: "https://picsum.photos/101/101",
          title: "Aurangzeebi",
          description: "Indulge in the opulence of Aurangzeebi fashion. Our collection features luxurious fabrics and ornate designs that capture the essence of timeless elegance and grandeur."
        },
        {
          url: "https://picsum.photos/99/101",
          title: "Limited",
          description: "Don't miss out on our exclusive limited-edition collection. These unique pieces are available for a short time only, offering rare and distinctive styles for those who appreciate exceptional fashion."
        },
        {
          url: "https://picsum.photos/101/99",
          title: "Confortable Wear",
          description: "Experience ultimate comfort with our collection of relaxed and stylish wear. Perfect for lounging or casual outings, our comfortable pieces combine ease with modern design."
        }
      ];
      

      const handleMouseEnter = () => {
        setIsHover(true);
      };
    
      const handleMouseLeave = () => {
        setIsHover(false);
      };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex lg:flex-row md:flex-row flex-col bg-white lg:pt-2 md:pt-2 mt-4'>
        <div className="flex lg:flex-col md:flex-col flex-row justify-center gap-2 bg-white items-center text-black p-4 lg:w-1/4 md:w-1/4">
            <p className='font-tanker lg:text-xl md:text-lg text-sm'>Mughal Era</p>
            <p className='font-tanker lg:text-xl md:text-lg text-sm'>Shop by Collection</p>
        </div>

    <div className='items-center w-full h-auto bg-white sm:px-8 px-5 lg:w-3/4 md:w-3/4'>
        
        <div className="flex relative z-0 px-2 pt-4 pb-8 items-center ">
        <Swiper
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        loop
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        slidesPerView={3}
        spaceBetween={0}
        breakpoints={{
            320: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            375: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
        modules={[Autoplay, Navigation, Pagination]}
        onSlideChange={handleIndex}
        onSwiper={(swiper) => console.log(swiper)}
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
        {catcarousel.map((item, index) => (
      <SwiperSlide key={index}>
        <div className='flex flex-col gap-2 justify-center items-center'>
        <div className="lg:h-[80px] md:h-[50px] h-[50px] lg:w-[80px] md:w-[50px] w-[50px]">
        <img
          src={item.url}
          sizes='w-full h-full'
          alt={item.title}
          className='rounded-full w-full h-full'
        />
        </div>
        <div>
        <p className='lg:text-sm md:text-sm text-xs font-archivo font-bold text-black'>{item.title}</p>
        </div>
        </div>
      </SwiperSlide>))}

        </Swiper>
        <div className="absolute sm:bottom-4 bottom-2 left-2/4 z-40 flex -translate-x-2/4 gap-2">
          {catcarousel.map((item, index) => (
            <div
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`${
                currentIndex === index ? "w-8 bg-black/30" : "w-4 bg-black/30"
              } block h-1 cursor-pointer rounded-2xl transition-all overflow-hidden`}
            > {currentIndex === index ? (
              <div
              className="h-full bg-black/50 transition-all"
              style={{ width: `${barProgress}%` }}
            ></div>
            ) : null}</div>
          ))}
        </div>

        <div className='absolute insect-0 left-0 z-50 flex -translate-x-2/4'>
        <button className={`bg-transparent items-center ${isHover ? "text-black/50 hover:text-white hover:bg-black/60" : "text-transparent" }  rounded-full p-2`} onClick={() => swiperRef.current?.slidePrev()}>
            <IoChevronBackOutline className='sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]'/>
        </button>
        </div>
        <div className='absolute insect-0 right-0 z-50 flex translate-x-2/4'>
      <button className={`bg-transparent ${isHover ? "text-black/50 hover:text-white hover:bg-black/60" : "text-transparent" }  rounded-full p-2`} onClick={() => swiperRef.current?.slideNext()}>
      <IoChevronForwardOutline className='sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]' />
        </button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Catcarousel