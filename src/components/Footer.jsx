import React from 'react'
import logo from '../assets/Logo_Harta_Jaya.png'
import { FaLocationDot, FaSquareInstagram } from 'react-icons/fa6'
import { IoIosCall, IoMdMail } from 'react-icons/io'

export default function Footer() {
    return (
        <div className='min-h-[400px] bg-[#0D2C54] p-2'>
            <div class="grid grid-cols-1 md:grid-cols-2 ">
                <div class="flex flex-col justify-center items-center">
                    <img
                        src={logo}
                        alt="Harta Jaya Logo"
                        class="w-[300px] h-[300px]"
                    />
                    {/* <div className='flex flex-col justify-center items-center '>
                        <h2 class="text-xl font-semibold">Harta Jaya</h2>
                        <h2 class="text-lg font-semibold">Tour & Travel</h2>
                    </div> */}
                </div>

                <div class="flex flex-col justify-center space-y-5 text-sm md:text-base text-white">
                    <div class="flex items-center space-x-3">
                        <FaLocationDot color='white' size={25}/>
                        <p>Jl. Kebo Iwa Bongan, Puseh, Kec. Tabanan, Kabupaten Tabanan, Bali 82112</p>
                    </div>

                    <div class="flex items-center space-x-3">
                        <IoIosCall color='white' size={25}/>
                        <a href='tel:085655477554' className='underline' rel='noopener noreferrer'>085655477554</a>
                    </div>

                    <div class="flex items-center space-x-3">
                        <FaSquareInstagram color='white' size={25} />
                        <a href='https://www.instagram.com/hartajayabadi.jatim/' className='underline' target='_blank' rel='noopener noreferrer'>@hartajayaabadi.jatim</a>
                    </div>

                    <div class="flex items-center space-x-3">
                        <IoMdMail color='white' size={25} />
                        <a href='mailto:hartajayatourntraveljatim@gmail.com' className='underline' rel='noopener noreferrer'>hartajayatourntraveljatim@gmail.com</a>
                    </div>
                </div>
            </div>


            <div className='px-10'>
                <div class="w-full border-t border-gray-400 mt-10 px-10"></div>
            </div>

            <p class="text-center text-sm mt-5 text-gray-300">
                © 2025 Harta Jaya Tour & Travel — Semua Hak Dilindungi
            </p>
        </div>
    )
}
