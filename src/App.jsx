import './App.css'
import Navbar from './components/Navbar'
import backgroundHero from './assets/Hero-Background.png'
import { MdWhatsapp } from 'react-icons/md'
import buskecil from './assets/mini_bus-removebg-preview.webp';
import innova from './assets/innova.png';
import hiace from './assets/hiace.png';
import bgArmada from './assets/bg-armada.png';
import paketWisata1 from './assets/PaketWisata-1.jpg';
import paketWisata2 from './assets/PaketWisata-2.jpg';
import paketWisata3 from './assets/PaketWisata-3.jpg';
import { IoPricetag } from 'react-icons/io5';
import { FaCalendarCheck, FaCarAlt, FaRoute, FaUserTie } from 'react-icons/fa';
import { BsHeadset } from 'react-icons/bs';
import Card from './components/Card';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Footer from './components/Footer';

function App() {

  return (
    <div className='scroll-smooth' >
      <Navbar />
      <section id='hero' className='h-screen w-full bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${backgroundHero})` }}>
        <div className='flex flex-col lg:p-16 md:p-10 p-5 justify-center h-full gap-8'>
          <div className='flex flex-col'>
            <h1 className='font-roboto font-bold xl:text-[64px] lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:w-[748px] md:w-[550px] sm:w-[350px] w-[95%] text-white m-0 p-0'>Jelajahi Dunia Dengan Harta Jaya Tour & Travel</h1>
            <h2 className='font-roboto xl:text-[32px] lg:text-[30px] md:text-2xl sm:text-xl text-[18px] lg:w-[622px] md:w-[320px] sm:w-[200px] w-[80%] text-white m-0 p-0'>Nikmati Antar Jemput Nyaman di Seluruh Wilayah Bali</h2>
          </div>
          <div className='flex flex-col items-start'>
            <h3 className='font-roboto font-light italic text-white lg:text-[32px] md:text-[24px] text-[16px] lg:w-[407px] md:w-[270px] sm:w-[120px] w-[80%]'>Rencanakan Perjalanan impian Anda bersama kami.</h3>
            <a href='https://wa.link/plevtw' target='_blank' rel='noopener noreferrer' className='bg-white md:p-1.5 p-1 flex items-center gap-3 lg:pr-5 pr-3 rounded-full'>
              <div className='bg-[#2AA81A] md:h-10 md:w-10 h-8 w-8 rounded-full flex justify-center items-center'>
                <MdWhatsapp  className='lg:w-5 lg:h-5 h-4.5 w-4.5' color='white' />
              </div>
              <h1 className='font-roboto font-semibold md:text-[14px] text-[12px] '>Hubungi Kami</h1>
            </a>
          </div>
        </div>
      </section>
      <section id='armada' className='min-h-[450px] flex w-full pt-10 '>
        <div className=' flex flex-col gap-2 w-full'>
          <div className='flex justify-between px-5'>
            <h1 className='font-roboto font-black md:text-[40px] sm:text-[30px] text-[24px] '>ARMADA KAMI</h1>
            <p className='font-roboto font-light italic md:w-[300px] w-[250px] md:text-[16px] text-[13px]'>Nikmati Antar Jemput Mudah dan Cepat di Bali, Tanpa Ribet!</p>
          </div>
          <div>
            <p className='font-roboto lg:text-2xl md:text-xl text-lg  font-light italic px-5'>Setiap Perjalanan bersama Harta Jaya Tour & Travel didukung armada terbaik seperti innova reborn, Hiace, dan Bus Mini yang selalu dalam kondisi prima.
              Dilengkapi pendingin udara (AC), interior bersih dan luas, serta driver berpengalaman dan ramah, kami pastikan perjalanan Anda selalu aman, nyaman, dan menyenangkan.</p>
          </div>
          <div className='bg-cover bg-center relative z-0' style={{ backgroundImage: `url(${bgArmada})` }}>
            <div className='bg-white/50 inset-0 absolute z-10 top-0 left-0' />
            <div className=' relative z-50  grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 grid-cols-1 gap-2 justify-items-center p-5'>
              <Card image={buskecil} armadaName={"Mini Bus"} deskripsi={"Ideal untuk perjalanan rombongan kecil dan acara kantor."} harga={"2.000.000"} />
              <Card image={innova} armadaName={"Innova Reborn"} deskripsi={"Kenyamanan dan kemewahan untuk perjalanan keluarga kecil atau bisnis."} harga={"950.000"} />
              <Card image={hiace} armadaName={"Hiace"} deskripsi={"Pilihan tepat untuk perjalanan grup dengan kenyamanan ekstra"} harga={"1.500.000"} />
              
              {/* <div className='aspect-video'></div>
              <div className='aspect-video'></div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <section id='fasilitas' className='min-h-[200px] p-5'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-roboto font-black md:text-[40px] text-[30px]'>FASILITAS ARMADA KAMI</h1>
          
        </div>
      </section> */}
      {/* <section id='pricelist' className='min-h-[200px] p-5'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-roboto font-black md:text-[40px] text-[30px]'>PRICELIST REGULAR</h1>
          <p className='font-roboto lg:text-2xl md:text-xl text-lg  font-light italic'>Kami Menyediakan layanan travel dengan harga kompetitif dan transparan, tanpa biaya tersembunyi. Setiap perjalanan Anda sudah termasuk driver berpengalaman, BBM, dan Tol, memastikan kenyamanan dan ketenangan selama di perjalanan
            Nikmati kualitas layanan dengan tarif yang tetap ramah di kantong.
          </p>
          <div class="w-full mx-auto border border-gray-300 rounded-md overflow-hidden shadow font-roboto font-black">
            <div class="grid grid-cols-3 bg-[#0A2E52] text-white font-bold text-sm md:text-base">
              <div class="p-4">ARMADA</div>
              <div class="p-4 text-center">DURASI</div>
              <div class="p-4 text-right">HARGA</div>
            </div>
            <div class="grid grid-cols-3 items-center p-7">
              <div class="font-semibold">INNOVA REBORN</div>
              <div class="text-center font-medium">12 JAM</div>
              <div class="text-right font-bold">Rp.950.000</div>
            </div>
            <div class="border-b border-gray-300"></div>

            <div class="grid grid-cols-3 items-center p-7">
              <div class="font-semibold">LOREM IPSUM - LOREM</div>
              <div class="text-center font-medium">12 JAM</div>
              <div class="text-right font-bold">Rp.250.000</div>
            </div>
            <div class="border-b border-gray-300"></div>
            <div class="grid grid-cols-3 items-center p-7">
              <div class="font-semibold">LOREM IPSUM - LOREM</div>
              <div class="text-center font-medium">12 JAM</div>
              <div class="text-right font-bold">Rp.350.000</div>
            </div>
          </div>
          <div className='flex justify-center'>
            <p className='font-roboto font-light italic '>Layanan drop include: driver, bbm & tol</p>
          </div>
        </div>
      </section> */}
      <section id='mengapa-kami' className='p-5'>
        <h1 className='font-roboto font-black md:text-[40px] sm:text-[30px] text-[24px]'>MENGAPA HARTA JAYA TOUR & TRAVEL</h1>
        <p className='font-roboto lg:text-2xl md:text-xl text-lg  font-light italic'>Bersama kami, perjalanan bukan sekedar berpindah tempat, tapi pengalaman yang berkesan. Kami hadir dengan armada terbaik, layanan profesional, dan harga bersahabat untuk memastikan setiap perjalanan berjalan lancar dan menyenangkan.</p>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-2 w-full mx-auto font-roboto mt-5">
          <div class="flex gap-4 p-6 py-10 items-center h-56 bg-white shadow-[0px_0px_3px_1px_rgba(0,0,0,0.25)] rounded-xs">
            <div className='flex items-center'>
              <div class="w-14 h-14 rounded-full bg-[#0A2E52] flex items-center justify-center text-white">
                <IoPricetag color='white' className='w-7 h-7' />
              </div>
            </div>
            <div>
              <h3 class="text-[#0A2E52] font-bold lg:text:-[32px] md:text-[24px] sm:text-2xl text-xl">HARGA BERSAHABAT</h3>
              <p class="text-gray-700 mt-1 italic lg:text-xl  text-sm">
                Nikmati perjalanan nyaman tanpa harus khawatir soal biaya. Kami menawarkan tarif terbaik yang sebanding dengan kenyamanan dan pelayanan maksimal.
              </p>
            </div>
          </div>

          <div class="flex gap-4 p-6 py-10 items-center h-56 bg-white shadow-[0px_0px_3px_1px_rgba(0,0,0,0.25)] rounded-xs">
            <div className='flex items-center'>
              <div class="w-14 h-14 rounded-full bg-[#0A2E52] flex items-center justify-center text-white">
                <FaRoute color='white' className='w-7 h-7' />
              </div>
            </div>
            <div>
              <h3 class="text-[#0A2E52] font-bold lg:text:-[32px] md:text-[24px] sm:text-2xl text-xl">JEMPUT & ANTAR LANGSUNG KE TUJUAN</h3>
              <p class="text-sm text-gray-700 mt-1 italic lg:text-xl  ">
                Tak perlu repot mencari titik keberangkatan. Kami siap menjemput Anda langsung di lokasi dan mengantar sampai tujuan dengan aman dan tepat waktu.
              </p>
            </div>
          </div>

          <div class="flex gap-4 p-6 py-10 items-center h-56 bg-white shadow-[0px_0px_3px_1px_rgba(0,0,0,0.25)] rounded-xs">
            <div className='flex items-center'>
              <div class="w-14 h-14 rounded-full bg-[#0A2E52] flex items-center justify-center text-white">
                <BsHeadset color='white' className='w-7 h-7' />
              </div>
            </div>
            <div>
              <h3 class="text-[#0A2E52] font-bold lg:text:-[32px] md:text-[24px] sm:text-2xl text-xl">LAYANAN CEPAT, RESPONS SEPENUH HATI</h3>
              <p class="text-sm text-gray-700 mt-1 italic lg:text-xl  ">
                Tim kami siap membantu Anda 24 jam, dan siap memberikan solusi perjalanan terbaik setiap saat.
              </p>
            </div>
          </div>

          <div class="flex gap-4 p-6 py-10 items-center h-56 bg-white shadow-[0px_0px_3px_1px_rgba(0,0,0,0.25)] rounded-xs">
            <div className='flex items-center'>
              <div class="w-14 h-14 rounded-full bg-[#0A2E52] flex items-center justify-center text-white">
                <FaCarAlt color='white' className='w-7 h-7' />
              </div>
            </div>
            <div>
              <h3 class="text-[#0A2E52] font-bold lg:text:-[32px] md:text-[24px] sm:text-2xl text-xl">ARMADA BERSIH, NYAMAN, DAN TERAWAT</h3>
              <p class="text-sm text-gray-700 mt-1 italic lg:text-xl  ">
                Setiap kendaraan kami selalu dirawat dengan baik. Kabin bersih, AC dingin, dan kondisi prima demi kenyamanan perjalanan Anda.
              </p>
            </div>
          </div>

          <div class="flex gap-4 p-6 py-10 items-center h-56 bg-white shadow-[0px_0px_3px_1px_rgba(0,0,0,0.25)] rounded-xs">
            <div className='flex items-center'>
              <div class="w-14 h-14 rounded-full bg-[#0A2E52] flex items-center justify-center text-white">
                <FaUserTie color='white' className='w-7 h-7' />
              </div>
            </div>
            <div>
              <h3 class="text-[#0A2E52] font-bold lg:text:-[32px] md:text-[24px] sm:text-2xl text-xl">SOPIR ANDAL & PROFESIONAL</h3>
              <p class="text-sm text-gray-700 mt-1 italic lg:text-xl  ">
                Driver kami berpengalaman, sopan, dan mengenal rute dengan baik. Siap mengantarkan Anda dengan aman dan tepat waktu.
              </p>
            </div>
          </div>

          <div class="flex gap-4 p-6 py-10 items-center h-56 bg-white shadow-[0px_0px_3px_1px_rgba(0,0,0,0.25)] rounded-xs">
            <div className='flex items-center'>
              <div class="w-14 h-14 rounded-full bg-[#0A2E52] flex items-center justify-center text-white">
                <FaCalendarCheck color='white' className='w-7 h-7' />
              </div>
            </div>
            <div>
              <h3 class="text-[#0A2E52] font-bold lg:text:-[32px] md:text-[24px] sm:text-2xl text-xl">PAKET PERJALANAN FLEKSIBEL SESUAI KEBUTUHAN</h3>
              <p class="text-sm text-gray-700 mt-1 italic lg:text-xl  ">
                Sesuaikan perjalanan Anda dengan waktu dan anggaran. Kami menawarkan layanan personal untuk keluarga, bisnis, maupun wisata bersama teman.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='paket-wisata' className='p-5 flex flex-col'>
        <h1 className='font-roboto font-black md:text-[40px] sm:text-[30px] text-[24px]'>PAKET WISATA</h1>
        <div className='flex gap-3 overflow-auto'>
          <PhotoProvider>
            <PhotoView src={paketWisata1}>
              <img src={paketWisata1} className="w-72 cursor-pointer" />
            </PhotoView>
            <PhotoView src={paketWisata2}>
              <img src={paketWisata2} className="w-72 cursor-pointer" />
            </PhotoView>
            <PhotoView src={paketWisata3}>
              <img src={paketWisata3} className="w-72 cursor-pointer" />
            </PhotoView>
          </PhotoProvider>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
