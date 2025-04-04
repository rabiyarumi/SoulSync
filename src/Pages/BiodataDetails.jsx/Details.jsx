import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Biodata from "../AllBiodatas/Biodata";
import Swal from "sweetalert2";
import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";
import {
  FaVenusMars,
  FaBirthdayCake,
  FaRulerVertical,
  FaWeight,
  FaUserTie,
  FaUsers,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import Container from "@/components/Layouts/Container";
import SectionHeaders from "@/components/Layouts/SectionHeaders";

const Details = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { role } = useRole();
  // Fetch biodata details
  const { data: biodata = {}, isLoading: isBiodataLoading } = useQuery({
    queryKey: ["biodata", id], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/biodatas/${id}`
      );
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
  } = biodata || {};
  const accurateHeight = height?.split("-");
  console.log(accurateHeight);

  // Fetch similar biodatas only when gender is available
  const { data: similarBiodatas = [], isLoading: isSimilarLoading } = useQuery({
    queryKey: ["similarBiodatas", gender], // Include gender in queryKey
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/biodatas?gender=${gender}`
      );
      return data;
    },
    enabled: !!gender, // Ensure this query runs only when gender is available
  });

  if (isBiodataLoading || isSimilarLoading) return <LoadingSpinner />;

  const handleAddToFavorite = async (biodata) => {
    const favBiodata = {
      name: biodata.name,
      biodataId: biodata.biodataId,
      biodata_id: biodata._id,
      division: biodata.division,
      district: biodata.district,
      occupation: biodata.occupation,
    };

    const favoriteBiodata = {
      userEmail: user.email,
      favBiodata,
    };

    try {
      // post req
      await axios
        .post(`${import.meta.env.VITE_API_URL}/fav-biodatas`, favoriteBiodata)
        .then((data) => {
          console.log(data);
        });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Biodata Has been added to Favorite List",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <Container>
      <div className="   flex flex-col md:flex-row gap-6 md:gap-12 items-center my-20">
        {/* Image Section */}
        <div className="w-80 h-96 border-2 border-[#800020] rounded-lg overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Details Section */}
        <div className="flex-1 space-y-3 text-gray-700">
          <h3 className="text-2xl font-bold text-[#800020]">{name}</h3>

          <div className="grid grid-cols-2 gap-3">
            <p className="flex items-center gap-2">
              <FaVenusMars className="text-[#800020]" /> {gender}
            </p>
            <p className="flex items-center gap-2">
              <FaBirthdayCake className="text-[#800020]" />
              {age} Years
            </p>
            <p className="flex items-center gap-2">
              <FaRulerVertical className="text-[#800020]" /> {accurateHeight[1]}{" "}
              Fit
            </p>
            <p className="flex items-center gap-2">
              <FaWeight className="text-[#800020]" /> {weight} kg
            </p>
            <p className="flex items-center gap-2">
              <FaUserTie className="text-[#800020]" /> {occupation}
            </p>
            <p className="flex items-center gap-2">
              <FaUsers className="text-[#800020]" /> {race}
            </p>
            <p className="flex items-center gap-2">
              <FaUserTie className="text-[#800020]" /> Father: {fathersName}
            </p>
            <p className="flex items-center gap-2">
              <FaUserTie className="text-[#800020]" /> Mother: {mothersName}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#800020]" /> {division},{" "}
              {district}
            </p>
            {/* <p className="flex items-center gap-2"><FaUsers className="text-[#800020]" /> Partner Preference: {partner?.height}</p> */}
          </div>

          {/* Buttons in one line */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleAddToFavorite(biodata)}
              className="flex items-center gap-2 px-5 py-2 bg-[#800020] text-white rounded-lg hover:bg-[#640018] transition"
            >
              <FaHeart /> Add to Favorite
            </button>

            {role === "Admin" || role === "Premium" ? (
              <div className="flex gap-4 text-gray-800">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-[#800020]" /> {contact?.email}
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-[#800020]" /> {contact?.phone}
                </p>
              </div>
            ) : (
              <Link
                to={`/checkout/${biodata?._id}`}
                className="flex items-center gap-2 px-5 py-2 border border-[#800020] text-[#800020] rounded-lg hover:bg-[#800020] hover:text-white transition"
              >
                Request for Contact
              </Link>
            )}
          </div>
        </div>
      </div>

            <SectionHeaders title={"Explore Similar "} coloredTitle={"Biodatas"} />
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center lg:justify-between items-center ">
        {similarBiodatas.slice(0,3).map((similarData) => (
          <Biodata key={similarData._id} biodata={similarData}></Biodata>
        ))}
      </div>
      </Container>
  );
};

export default Details;
