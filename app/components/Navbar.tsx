"use client"
import React, { useState, useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    
  const [navSize, setnavSize] = useState("h-[6rem]");
  const [navColor, setnavColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-black");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("bg-secondary") : setnavColor("bg-transparent");
    window.scrollY > 10 ? setnavSize("h-[5rem]") : setnavSize("h-[6rem]");
    window.scrollY > 10 ? setTextColor("text-white") : setTextColor("text-black");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className={`transition-all fixed flex flex-row justify-between px-4 items-center w-full z-50 ${navSize} ${navColor}`}>
  <div className={`items-center bg-transparent ${textColor}`}>
    <IoSearchOutline className='lg:w-[28px] lg:h-[28px] md:w-[24px] md:h-[24px] w-[20px] h-[20px]'/>
  </div>
  <div className={`bg-transparent items-center ${textColor}`}><p className='font-nature lg:text-4xl md:text-2xl text-xl'>Rani Haar</p></div>
  <div className={`bg-transparent flex items-center flex-row gap-4 ${textColor}`}>
    <RiShoppingCart2Line className='lg:w-[28px] lg:h-[28px] md:w-[24px] md:h-[24px] w-[20px] h-[20px]' />
    <CgProfile className='lg:w-[28px] lg:h-[28px] md:w-[24px] md:h-[24px] w-[20px] h-[20px]' />
  </div>
</header>
  )
}

export default Navbar