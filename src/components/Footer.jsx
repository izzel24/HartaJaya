import React from 'react'
import logo from '../assets/Logo_Harta_Jaya.png'
import { FaLocationDot, FaSquareInstagram } from 'react-icons/fa6'
import { IoIosCall, IoMdMail } from 'react-icons/io'

export default function Footer() {
    return (
        <div className='min-h-[400px] bg-[#0D2C54] p-2'>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-5 ">
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
                <div className='flex items-center justify-center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.3671100797355!2d115.10628197485293!3d-8.560653191483135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23ba1d2c1019b%3A0xd154d2f53f9aed70!2sPT%20Harta%20Jaya%20Abadi%20Group!5e0!3m2!1sid!2sid!4v1764395839363!5m2!1sid!2sid" width="250" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
