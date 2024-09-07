"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const swiperRef = useRef<SwiperCore>();
  const [currentIndex, setCurrentIndex] = useState<number>(
    swiperRef.current?.realIndex ?? 0
  );
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

  const banner = [
    {
      url: "https://picsum.photos/1500/600",
      title: "Hands Wear",
      description: "Explore our stylish range of hand wear, including gloves and wrist accessories, designed for both function and fashion. Find the perfect pair to keep your hands warm and stylish."
    },
    {
      url: "https://picsum.photos/1500/601",
      title: "Bridal Collection",
      description: "Find the perfect bridal accessories to complete your wedding look. Our collection features elegant pieces that add a touch of glamour and grace to your special day."
    },
    {
      url: "https://picsum.photos/1500/602",
      title: "Mugliya Collection",
      description: "Embrace the rich heritage and intricate designs of Mugliya fashion. Discover pieces that blend tradition with modern elegance, perfect for making a unique fashion statement."
    },
    {
      url: "https://picsum.photos/1500/603",
      title: "Aurangzeebi Collection",
      description: "Indulge in the opulence of Aurangzeebi fashion. Our collection features luxurious fabrics and ornate designs that capture the essence of timeless elegance and grandeur."
    },
    {
      url: "https://picsum.photos/1500/599",
      title: "Limited Collection",
      description: "Don't miss out on our exclusive limited-edition collection. These unique pieces are available for a short time only, offering rare and distinctive styles for those who appreciate exceptional fashion."
    },
    {
      url: "https://picsum.photos/1500/598",
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
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex relative z-0">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          spaceBetween={10}
          slidesPerView={1}
          effect="fade"
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          onSlideChange={handleIndex}
          onSwiper={(swiper) => console.log(swiper)}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {banner.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative lg:h-[500px] md:h-[350px] h-[250px] w-full">
                <img
                  src={item.url}
                  sizes="w-full h-full"
                  alt="image 1"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute inset-0 flex flex-row h-full w-full items-center justify-around bg-black/30">
                <div className="flex items-center justify-start sm:p-4 p-0 z-10">
                  <button
                    className={`bg-transparent items-center ${
                      isHover
                        ? "text-white hover:text-black hover:bg-white/60"
                        : "text-transparent"
                    } rounded-full p-2`}
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <IoChevronBackOutline className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]" />
                  </button>
                </div>
                <div className="w-full pt-16 text-center md:w-full">
                  <p className="sm:mb-10 mb-5 font-adelia text-xl md:text-4xl text-white lg:text-5xl">
                    {item.title}
                  </p>
                  <p className="line-clamp-3 lg:mb-12 md:mb-6 mb-4 font-sans text-xs md:text-sm text-white font-archivo lg:text-lg opacity-80">
                    {item.description}
                  </p>
                  <div className="flex justify-center sm:gap-10 gap-5">
                    <button className="rounded-lg font-archivo lg:px-4 md:px-3 px-2 lg:py-3 md:py-2 py-1 bg-white text-xs md:text-sm text-black lg:text-lg">
                      Explore
                    </button>
                    <button
                      className="rounded-lg font-archivo lg:px-4 md:px-3 px-2 lg:py-3 md:py-2 py-1 bg-white text-xs md:text-sm text-black lg:text-lg"
                      onClick={() => {
                        console.log("gallery");
                      }}
                    >
                      Gallery
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-end sm:p-4 p-0 z-10">
                  <button
                    className={`bg-transparent ${
                      isHover
                        ? "text-white hover:text-black hover:bg-white/60"
                        : "text-transparent"
                    } rounded-full p-2`}
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <IoChevronForwardOutline className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute sm:bottom-4 bottom-2 left-2/4 z-40 flex -translate-x-2/4 gap-2">
          {banner.map((item, index) => (
            <div
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`${
                currentIndex === index ? "w-8 bg-white/50" : "w-4 bg-white/50"
              } block h-1 cursor-pointer rounded-2xl transition-all overflow-hidden`}
            > {currentIndex === index ? (
              <div
              className="h-full bg-white transition-all"
              style={{ width: `${barProgress}%` }}
            ></div>
            ) : null}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
