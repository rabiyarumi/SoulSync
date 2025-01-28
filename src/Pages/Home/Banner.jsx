import { Swiper, SwiperSlide } from 'swiper/react';
import married1 from "../../assets/married-6.jpg"
import married3 from "../../assets/married-10.jpg"
import married4 from "../../assets/married-12.jpg"
import married9 from "../../assets/married-4.webp"
import married10 from "../../assets/married-5.jpg"
import married11 from "../../assets/married-9.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <>
        <Swiper
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
            <img src={married3} alt="" className='w-full h-[calc(100vh*2/3)] xl:h-[calc(100vh*3/4)]' />
          </SwiperSlide>
            <SwiperSlide>
            <img src={married11} alt="" className='w-full h-[calc(100vh*2/3)] xl:h-[calc(100vh*3/4)]' />
          </SwiperSlide>
           
          <SwiperSlide>
            <img src={married4} alt="" className='w-full h-[calc(100vh*2/3)] xl:h-[calc(100vh*3/4)]' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={married10} alt="" className='w-full h-[calc(100vh*2/3)] xl:h-[calc(100vh*3/4)]' />
          </SwiperSlide>
          
          <SwiperSlide>
            <img src={married9} alt="" className='w-full h-[calc(100vh*2/3)] xl:h-[calc(100vh*3/4)]' />
          </SwiperSlide>
         
          
          
        </Swiper>
      </>
    );
};

export default Banner;