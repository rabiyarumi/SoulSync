import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Biodata from "../AllBiodatas/Biodata";
import Container from "@/components/Layouts/Container";
import SectionHeaders from "@/components/Layouts/SectionHeaders";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@headlessui/react";

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
      <div>
        <SectionHeaders
          title={"Explore Our "}
          coloredTitle={"Premium Biodatas"}
        />

        <div className="">
          <Marquee className="">
            {premiumBiodatas?.map((biodata) => (
              <div key={biodata._id} className="ml-6">
                <Link to={`/biodata/${biodata._id}`}>
                  <Card>
                    <img
                      src={biodata?.image}
                      alt=""
                      className="h-56   rounded-t-xl w-80"
                    />
                    <CardHeader className="flex flex-row gap-4">
                      <CardTitle className="text-red-600">
                        {biodata?.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Age: {biodata?.age}</p>
                      <p>Race: {biodata?.race}</p>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/biodata/${biodata?._id}`}>
                        <Button>View Details</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </Container>
  );
};

export default PremiumBiodata;
