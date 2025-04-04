import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import useUserBiodata from "@/hooks/useUserBiodata";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Biodata from "../AllBiodatas/Biodata";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaStar } from "react-icons/fa";

const ViewBiodata = () => {
  const { user } = useAuth();
  const { myBiodata } = useUserBiodata();
  const navigate = useNavigate();

  const {
    name,
    image: imageUrl,
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
    biodataId,
  } = myBiodata || {};
  //-----------------------delete biodata
  const handleDelete = (_id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          //delete data from database

          const { data } = axios.delete(
            `${import.meta.env.VITE_API_URL}/biodatas/${_id}`
          );
          console.log(data);
          Swal.fire({
            title: "Deleted!",
            text: "Your Biodata been deleted.",
            icon: "success",
          });
          navigate("/dashboard/create-biodata");
        }
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something is wrong!",
      });
    }

    // sweet alart end
  };

  //-----------------------Upgrade biodata
  const handleUpgrade = () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You Wan't to make your biodata Premium!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Request!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          //delete data from database

          const { data } = await axios.patch(
            `${import.meta.env.VITE_API_URL}/users/${user?.email}`
          );
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Wait for Response",
            text: "Your Request has been Recorded!",
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data}`,
      });
    }
  };

  if (!myBiodata) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold text-gray-600">
        No Biodata Found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8 ">
      {/* Profile Picture at the Top */}
      <div className="flex ">
        <img
          src={imageUrl}
          alt={name}
          className="w-40 h-40 object-cover rounded-lg border-3 border-[#800020] shadow-lg"
        />
      </div>

      {/* Main Information */}
      <h2 className="text-3xl font-bold text-[#800020] mt-4">{name}</h2>
      <p className="text-gray-600 text-lg">
        Biodata ID: <span className="font-semibold">{biodataId}</span>
      </p>
      <p className="text-gray-600 text-lg">
        Email: <span className="font-semibold">{contact?.email}</span>
      </p>
      <p className="text-gray-600 text-lg">
        Phone: <span className="font-semibold">{contact?.phone}</span>
      </p>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-gray-700 text-left">
        <p>
          <span className="font-semibold">Age:</span> {age}
        </p>
        <p>
          <span className="font-semibold">Gender:</span> {gender}
        </p>
        <p>
          <span className="font-semibold">Height:</span> {height} cm
        </p>
        <p>
          <span className="font-semibold">Weight:</span> {weight} kg
        </p>
        <p>
          <span className="font-semibold">Occupation:</span> {occupation}
        </p>
        <p>
          <span className="font-semibold">Birth Date:</span> {birth}
        </p>
        <p>
          <span className="font-semibold">Race:</span> {race}
        </p>
        <p>
          <span className="font-semibold">Father’s Name:</span> {fathersName}
        </p>
        <p>
          <span className="font-semibold">Mother’s Name:</span> {mothersName}
        </p>
        <p>
          <span className="font-semibold">Division:</span> {division}
        </p>
        <p>
          <span className="font-semibold">District:</span> {district}
        </p>
        <p>
          <span className="font-semibold">Preferred Height:</span>{" "}
          {partner?.height} fit
        </p>
        <p>
          <span className="font-semibold">Preferred Weight:</span>{" "}
          {partner?.weight} kg
        </p>
        <p>
          <span className="font-semibold">Preferred Age:</span> {partner?.age}{" "}
          years
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-6">
        <Button onClick={() => handleDelete(myBiodata?._id)}>
          <FaTrash />
          <button>Delete</button>
        </Button>

        <Button variant="outline" onClick={() => handleUpgrade(myBiodata?._id)}>
          <FaStar />
          <button >
            Upgrade to premium
          </button>
        </Button>
      </div>
    </div>
  );
};

export default ViewBiodata;


