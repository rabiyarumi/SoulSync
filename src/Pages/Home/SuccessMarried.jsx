import Container from '@/components/Layouts/Container';
import SectionHeaders from '@/components/Layouts/SectionHeaders';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { Card, CardContent } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from "framer-motion";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

const SuccessMarried = () => {
    
  const swiperRef = useRef(null);


     // Fetch similar biodatas only when gender is available
     const { data: successStory = [], isLoading, refetch } = useQuery({
        queryKey: ['successStory'], // Include gender in queryKey
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/married-stories`);
            return data;
        },
        // enabled: !!gender, // Ensure this query runs only when gender is available
    });

    console.log(successStory)

    if (isLoading) return <LoadingSpinner/>
    return (
      <Container>
      <SectionHeaders title="Explore Our" coloredTitle="Married Story" />
      
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} 
        className="w-full"
        onMouseEnter={() => swiperRef.current?.autoplay.stop()} 
        onMouseLeave={() => swiperRef.current?.autoplay.start()} 
      >
        {successStory?.map((story) => (
          <SwiperSlide key={story?._id}>
            <div className="flex flex-col md:flex-row items-center gap-6 p-4">
              
              {/* Left: Image */}
              <div className="w-full md:w-1/2">
                <img src={story?.image} alt="Wedding" className="w-full h-56 object-cover rounded-lg shadow-lg" />
              </div>
              
              {/* Right: Couple Details */}
              <div className="w-full md:w-1/2 bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#800020] mb-2">
                  {story?.brideName} & {story?.groomName}
                </h3>
                <p className="text-gray-700">{story?.marriedStory}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
    );
};

export default SuccessMarried;