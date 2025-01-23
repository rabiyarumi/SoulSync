import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Biodata from "../AllBiodatas/Biodata";

const Details = () => {
    const {id} = useParams()

  // Fetch biodata details
  const { data: biodata = {}, isLoading: isBiodataLoading } = useQuery({
    queryKey: ['biodata', id], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/biodatas/${id}`);
        return data;
    },
});

    
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
      } = biodata || {}

    // Fetch similar biodatas only when gender is available
    const { data: similarBiodatas = [], isLoading: isSimilarLoading } = useQuery({
        queryKey: ['similarBiodatas', gender], // Include gender in queryKey
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/biodatas?gender=${gender}`);
            return data;
        },
        enabled: !!gender, // Ensure this query runs only when gender is available
    });

    if (isBiodataLoading || isSimilarLoading) return <LoadingSpinner/>


    return (
       <>
        <div className="flex gap-10">
            <div>
            <img src={image} alt="" />
            </div>
           <div>
            <h3>{name}</h3>
            <p> gender: {gender}</p>
            <p> Age: {age}</p>
            <p> Age: {occupation}</p>
            <p> Age: {height}</p>
            <p> Age: {weight}</p>
            <p> Age: {division}</p>
            <p> Age: {district}</p>
           </div>
        </div>
        <div className="flex justify-between">
            {
                similarBiodatas.map(similarData => <Biodata key={similarData._id} biodata={similarData} ></Biodata>)
            }
        </div>
        </>
    );
};

export default Details;