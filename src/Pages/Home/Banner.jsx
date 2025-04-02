import { Swiper, SwiperSlide } from 'swiper/react';
import married1 from "../../assets/married-6.jpg"
import married3 from "../../assets/married-10.jpg"
import married4 from "../../assets/married-12.jpg"
import married9 from "../../assets/married-4.webp"
import married10 from "../../assets/married-5.jpg"
import married11 from "../../assets/married-9.jpg"
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner1.2.jpg"
import banner3 from "../../assets/banner2.jpg"
import banner4 from "../../assets/banner2.1.jpg"
import banner5 from "../../assets/banner3.jpg"
import banner6 from "../../assets/banner3.1.jpg"
import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <>
         <div
      className="relative h-[550px] md:h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="absolute inset-0 bg-[#800020] bg-opacity-40 flex items-center justify-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center text-white"
        >
          <h1 className="text-4xl font-bold">Welcome to <span className="">SoulSync</span> Academy</h1>
          <p className="mt-4 text-lg">
            Collaborate, complete assignments, and grade your friends in a dynamic online study group!
          </p>
        </motion.div>
      </div>
    </div>
         {/* <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
            <SwiperSlide>
            <img src={married1} alt="" className='w-full h-[calc(100vh*2/3)] xl:h-[calc(100vh*3/4)]' />
          </SwiperSlide>
            <SwiperSlide>
            <img src={banner1} alt="" className='w-full max-h-[850px]' />
          </SwiperSlide>
           <SwiperSlide>
            <img src={banner2} alt="" className='w-full max-h-[850px]' />
          </SwiperSlide> 
             <SwiperSlide>
            <img src={banner3} alt="" className='w-full max-h-[850px]' />
          </SwiperSlide>
           
          <SwiperSlide>
            <img src={banner4} alt="" className='w-full max-h-[850px]' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner5} alt="" className='w-full max-h-[850px]' />
          </SwiperSlide>
          
          <SwiperSlide>
            <img src={banner6} alt="" className='w-full max-h-[850px]' />
          </SwiperSlide>
        </Swiper>  */}
      </>
    );
};

export default Banner;