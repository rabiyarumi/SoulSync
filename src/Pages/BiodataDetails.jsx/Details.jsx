import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Biodata from "../AllBiodatas/Biodata";
import Swal from "sweetalert2";
import useAuth from "@/hooks/useAuth";

const Details = () => {
    const {id} = useParams()
    const {user} = useAuth()
    console.log(user.email)

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


    const handleAddToFavorite = async (biodata) => {

        const favBiodata = {
            name: biodata.name,
            biodataId: biodata.biodataId,
            biodata_id: biodata._id,
            division: biodata.division,
            district: biodata.district,
            occupation: biodata.occupation,
        }

        const favoriteBiodata = {
            userEmail: user.email,
            favBiodata
        }

        try {
            // post req
            await axios.post(`${import.meta.env.VITE_API_URL}/fav-biodatas`, favoriteBiodata)
            .then(data => {
              console.log(data)
            })
            Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Biodata Has been added to Favorite List",
                    showConfirmButton: false,
                    timer: 1500,
                  });
          } catch (err) {
            console.log(err)
          } 
    }


   


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
            <p> Occupation: {occupation}</p>
            <p> Height: {height}</p>
            <p> Age: {weight}</p>
            <p> Age: {division}</p>
            <p> Age: {district}</p>
            <button onClick={() => handleAddToFavorite(biodata)} className="p-3">Add to Fav</button>
            <Link to={`/checkout/${biodata.biodataId}`}>Request for Contact</Link>

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