import React, { useEffect, useState } from 'react'
import logoHartaJaya from "../assets/Logo_Harta_Jaya.png"
import { MdWhatsapp } from 'react-icons/md'
import { IoMenu } from 'react-icons/io5'


export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)
  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 50) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  },[])

  return (
    <div className='fixed w-full z-99'>
      <div className={`px-5  flex justify-between items-center transition-all ease-in duration-150 ${changeColor ? "sm:bg-white shadow" : "sm:bg-transparent"} bg-white `}>
      <a href='#' className='flex items-center gap-3.5'>
        <img src={logoHartaJaya} alt="" className='xl:w-[100px] lg:w-[98px] md:w-[92px] sm:w-[86px] w-[92px] ' />
        <div className='flex flex-col h-full'>
          <h1 className='font-inter font-bold xl:text-4xl lg:text-[34px] md:text-[28px] sm:text-[22px] text-[28px]'>Harta Jaya</h1>
          <h2 className='font-inter font-semibold xl:text-sm lg:text-[12px] text-[10px]'>Tour & Travel</h2>
        </div>
      </a>
        <div className='sm:flex hidden gap-5 font-roboto xl:text-[16px] md:text-sm sm:text-xs [&>*]:hover:text-blue-950'>
        <a href="#armada">Armada</a>
        {/* <a href="#fasilitas">Fasilitas</a>
        <a href="#pricelist">Pricelist</a> */}
        <a href="#mengapa-kami">Mengapa Kami?</a>
        <a href="#paket-wisata">Paket Wisata</a>
      </div>
        <a href='https://wa.link/plevtw' target='_blank' rel='noopener noreferrer'  className='sm:flex hidden items-center lg:gap-3 gap-1 bg-black lg:p-1.5 p-1 rounded-full lg:pr-6 md:pr-5 pr-3 cursor-pointer'>
        <div className='lg:w-10 lg:h-10 md:h-9 md:w-9 h-5 w-5 rounded-full bg-[#2AA81A] flex items-center justify-center'>
          <MdWhatsapp  className='lg:w-5 lg:h-5 md:h-4 md:w-4 h-3 w-3 ' color='white' />
        </div>
        <p className='font-roboto font-semibold text-white lg:text-[16px] md:text-[12px] sm:text-[10px]'>Hubungi Kami</p>
      </a>
      <button className={`sm:hidden flex ${openMenu ? "rotate-90" : "rotate-0"} transition-all ease-in duration-75 `} onClick={() => setOpenMenu(!openMenu) }>
        <IoMenu size={35} />
      </button>
    </div>
    <div className={` ${openMenu ? "flex" : "hidden" } sm:hidden bg-white flex-col items-start p-5 gap-5 font-roboto`}>
        <a href="#armada">Armada</a>
        {/* <a href="#fasilitas">Fasilitas</a>
        <a href="#pricelist">Pricelist</a> */}
        <a href="#mengapa-kami">Mengapa Kami?</a>
        <a href="#paket-wisata">Paket Wisata</a>
        <a href='https://wa.link/plevtw' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 bg-black p-1.5 rounded-full pr-4 cursor-pointer'>
          <div className='h-6 w-6 rounded-full bg-[#2AA81A] flex items-center justify-center'>
            <MdWhatsapp className='h-4 w-4 ' color='white' />
          </div>
          <p className='font-roboto font-semibold text-white text-[12px]'>Hubungi Kami</p>
        </a>
    </div>
    </div>
  )
}
