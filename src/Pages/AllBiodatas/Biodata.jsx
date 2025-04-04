/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
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
    fathersName,
    mothersName,
    division,
    district,
    partner,
    contact,
  } = biodata || {};

  return (
    <div>
      <Link to={`/biodata/${biodata._id}`}>
        <Card className=" w-80">
          <div className="bg-cover bg-center h-72 w-80 rounded-t-xl" style={{ backgroundImage: `url(${biodata?.image})` }}>
          
          </div>
          <CardHeader className="flex flex-row gap-4">
            <CardTitle className="text-[#800020]">{biodata?.name}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2">
            <p className="flex items-center gap-1">
              <IoMdHourglass />
              <span className="font-semibold text-black/75">
                : {biodata?.age} Years
              </span>
            </p>
            <p className="flex items-center gap-1">
              <IoLocationOutline />
              <span className="font-semibold text-black/75">
                : {biodata?.district}
              </span>
            </p>
            <p className="flex items-center gap-1">
              <PiSuitcaseSimpleDuotone />
              <span className="font-semibold text-black/75">
                : {biodata?.occupation}
              </span>
            </p>
            <p className="flex items-center gap-1">
              <BiUser />
              <span className="font-semibold text-black/75">
                : {biodata?.race} tone
              </span>
            </p>
          </CardContent>
          <CardFooter>
            <Link to={`/biodata/${biodata?._id}`}>
              <Button  size="sm" >View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default Biodata;
