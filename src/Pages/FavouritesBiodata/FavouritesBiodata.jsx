import LoadingSpinner from "@/components/shared/LoadingSpinner";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const FavouritesBiodata = () => {
  const { user } = useAuth();

  // Fetch Favorite biodata
  const { data: favoriteBiodata = [], isLoading: isBiodataLoading , refetch} = useQuery({
    queryKey: ["favoriteBiodata"], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/fav-biodatas/${user?.email}`
      );
      return data;
    },
  });

  //----------------delete favorite biodatas-----------------\\
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
           `${import.meta.env.VITE_API_URL}/fav-biodatas/${_id}`
         );
         console.log(data)
         Swal.fire({
           title: "Deleted!",
           text: "Your Biodata been deleted.",
           icon: "success",
         });
        refetch()
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

  if (isBiodataLoading) return <LoadingSpinner />;

  return (
    <div>
      My Favorite biodata
     
      <div>
        {
          favoriteBiodata.length > 0 ? 
          <div>
            {favoriteBiodata?.map((biodata) => (
          <div key={biodata._id} className="flex gap-8">
            <h1>{biodata.favBiodata.name}</h1>
            <h1>{biodata.favBiodata.biodataId}</h1>
            <button className="text-red-700">
              <button onClick={() => handleDelete(biodata._id)}>Delete</button>
            </button>
          </div>
        ))}
          </div> : 
          <div>
            <p>
            You  Have No Contact Request
            </p>
          </div>
        }


        
      </div>
    </div>
  );
};

export default FavouritesBiodata;
