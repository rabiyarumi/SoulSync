import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Biodata from "../AllBiodatas/Biodata";
import Container from "@/components/Layouts/Container";
import SectionHeaders from "@/components/Layouts/SectionHeaders";

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
          <SectionHeaders title={"Explore Our "} coloredTitle={"Premium Biodatas"}/>
      
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        {premiumBiodatas?.map((biodata) => (
          <Biodata key={biodata?._id} biodata={biodata} />
        ))}
      </div>
    </div>
    </Container>
  );
};

export default PremiumBiodata;
