import React from 'react'
import { FaUserTie } from 'react-icons/fa'
import { PiGasCanFill } from 'react-icons/pi'

export default function Card({image , armadaName, deskripsi , harga}) {
  return (
      <div class="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          <div class="w-full h-48 overflow-hidden flex justify-center items-center-center bg-[#efefef]">
              <img
                  src={image}
                  alt="House Painting"
                  class="w-[70%] h-full"
              />
          </div>

          <div class="p-5">
              <div class="flex items-start justify-between">
                  <div>
                      <h2 class="text-lg font-semibold">{armadaName}</h2>
                  </div>
              </div>

              <p>{deskripsi}</p>

              <div class="mt-4 space-y-2 text-gray-600 text-sm">
                 
                  <div class="flex items-center gap-2">
                      <div className='flex items-center gap-2'><FaUserTie /> Driver</div>
                  </div>
                  <div class="flex items-center gap-2">
                      <div className='flex items-center gap-2'><PiGasCanFill /> BBM</div>
                  </div>
              </div>
              <div className='mt-5 flex flex-col'>
                <div class="flex items-center justify-between">
                    <div className='flex flex-col'>
                        <p class="text-gray-600 text-sm">
                            Rp {harga}/12j
                        </p>
                        <p className='text-[9px] text-gray-400'>*Layanan drop include: driver, bbm & tol</p>
                    </div>
                    
                      <a href='https://wa.link/plevtw' target='_blank' rel='noopener noreferrer'
                        class="bg-[#0D2C54] cursor-pointer text-white px-4 py-2 rounded-sm font-medium hover:bg-[#0D2C54]/90 transition">
                        Pesan Sekarang
                    </a>
                </div>
                 
              </div>
          </div>
      </div>

  )
}
