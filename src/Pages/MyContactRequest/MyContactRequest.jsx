import LoadingSpinner from '@/components/shared/LoadingSpinner';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const MyContactRequest = () => {
    const { user } = useAuth();

  // Fetch Favorite biodata
  const { data: contactRequest = [], isLoading , refetch} = useQuery({
    queryKey: ["contactRequest"], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/purchase-contacts/${user?.email}`
      );
      return data;
    },
  });

  //----------------delete favorite biodatas-----------------\\
//   const handleDelete = (_id) => {
//     try{
//      Swal.fire({
//        title: "Are you sure?",
//        text: "You won't be able to revert this!",
//        icon: "warning",
//        showCancelButton: true,
//        confirmButtonColor: "#3085d6",
//        cancelButtonColor: "#d33",
//        confirmButtonText: "Yes, delete it!",
//      }).then((result) => {
//        if (result.isConfirmed) {
//          //delete data from database
   
//          const { data } = axios.delete(
//            `${import.meta.env.VITE_API_URL}/fav-biodatas/${_id}`
//          );
//          console.log(data)
//          Swal.fire({
//            title: "Deleted!",
//            text: "Your Biodata been deleted.",
//            icon: "success",
//          });
//         refetch()
//        }
//      })
//     }
//     catch{
//      Swal.fire({
//        icon: "error",
//        title: "Oops...",
//        text: "Something is wrong!",
//     })}
    
//      // sweet alart end
//    } 

  if (isLoading) return <LoadingSpinner />;
    return (
        <div>
            my contact request
        </div>
    );
};

export default MyContactRequest;