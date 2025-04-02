import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Biodata from "../AllBiodatas/Biodata";
import Container from "@/components/Layouts/Container";
import SectionHeaders from "@/components/Layouts/SectionHeaders";
import { Link } from "react-router-dom";
import { IoMdHourglass } from "react-icons/io";import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { BiUser } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PremiumBiodata = () => {
  // Fetch similar biodatas only when gender is available
  const { data: premiumBiodatas = [], isLoading: isSimilarLoading } = useQuery({
    queryKey: ["premiumBiodatas"], // Include gender in queryKey
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/biodatas?biodataType=Premium`
      );
      return data;
    },
    // Ensure this query runs only when gender is available
  });

  console.log(premiumBiodatas);
  return (
    <Container>
      
        <SectionHeaders
          title={"Explore Our "}
          coloredTitle={"Premium Biodatas"}
        />

        <Swiper
          
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1, // For small screens (sm)
              spaceBetween: 0,
              
            },
            768: {
              slidesPerView: 2, // For medium screens (md)
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3, // For large screens and above
              spaceBetween: 30
            },
          }}
        >
          {premiumBiodatas?.map((biodata) => (
            <SwiperSlide key={biodata?._id} className="">
              <Biodata biodata={biodata}/>
            </SwiperSlide>
          ))}
        </Swiper>
      
    </Container>
  );
};

export default PremiumBiodata;
