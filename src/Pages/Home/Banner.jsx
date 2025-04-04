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
      <div className="absolute inset-0 bg-[#800020] bg-opacity-45 flex items-center justify-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center text-white"
        >
          <h1 className="text-4xl font-bold ">Find Your Perfect Match on <span className="">SoulSync</span></h1>
<p className="mt-4 text-lg  ">
  Connect with verified profiles, explore meaningful relationships, and start your journey towards a beautiful future.
</p>
        </motion.div>
      </div>
    </div>
       
      </>
    );
};

export default Banner;