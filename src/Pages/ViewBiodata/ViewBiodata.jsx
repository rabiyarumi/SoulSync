import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import useUserBiodata from "@/hooks/useUserBiodata";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Biodata from "../AllBiodatas/Biodata";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const ViewBiodata = () => {

    const { user } = useAuth();
    const {myBiodata} = useUserBiodata()
    const navigate = useNavigate()

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
    biodataId
  } = myBiodata || {}

  //-----------------------delete biodata
const handleDelete = (_id) => {
 try{
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
      console.log(data)
      Swal.fire({
        title: "Deleted!",
        text: "Your Biodata been deleted.",
        icon: "success",
      });
      navigate('/dashboard/create-biodata')
    }
  })
 }
 catch{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something is wrong!",
 })}
 
  // sweet alart end
} 




    return (
        <>
        {
          myBiodata ? 
          <div>
            <h2>My Biodata</h2>
            <h2>Name: {name}</h2>
            <h2>Email: {contact?.email}</h2>
            <h2>biodata Id: {biodataId}</h2>

            <Button variant="outline" >
              <button onClick={() => handleDelete(myBiodata._id)}>Delete</button>
            </Button>

        </div> :
        <div>
          No Biodata Found
        </div>
        }
        </>
    );
};

export default ViewBiodata;