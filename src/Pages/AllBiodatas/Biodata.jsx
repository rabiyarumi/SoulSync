/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { IoMdHourglass } from "react-icons/io";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { BiUser } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

const Biodata = ({ biodata }) => {
  const {
    _id,
    name,
    image,
    gender,
    birth,
    height,
    weight,
    age,
    occupation,
    race,
   
    division,
    district,
    partner,
    contact,
  } = biodata || {};

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    // hover: { scale: 1.05, transition: { duration: 0.3 } },
  }; 

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    whileHover="hover"
    variants={cardVariants}
  >
    <Link to={`/biodata/${biodata._id}`}>
      <motion.div className="w-80 shadow-lg rounded-xl overflow-hidden bg-white">
        {/* Profile Image */}
        <div
          className="bg-cover bg-center h-72 w-80 rounded-t-xl"
          style={{ backgroundImage: `url(${biodata?.image})` }}
        ></div>

        {/* Card Header */}
        <div className="flex flex-row gap-4 p-4">
          <h3 className="text-[#800020] font-bold text-lg">
            {biodata?.name}
          </h3>
        </div>

        {/* Card Content */}
        <div className="grid grid-cols-2 p-4">
          <p className="flex items-center gap-1">
            <IoMdHourglass />
            <span className="font-semibold text-black/75">
              {biodata?.age} Years
            </span>
          </p>
          <p className="flex items-center gap-1">
            <IoLocationOutline />
            <span className="font-semibold text-black/75">
              {biodata?.district}
            </span>
          </p>
          <p className="flex items-center gap-1">
            <PiSuitcaseSimpleDuotone />
            <span className="font-semibold text-black/75">
              {biodata?.occupation}
            </span>
          </p>
          <p className="flex items-center gap-1">
            <BiUser />
            <span className="font-semibold text-black/75">
              {biodata?.race} tone
            </span>
          </p>
        </div>

        {/* Card Footer */}
        <div className="p-4 ">
          <Link to={`/biodata/${biodata?._id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#800020] text-white px-4 py-2 rounded-md"
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </Link>
  </motion.div>
  );
};

export default Biodata;
