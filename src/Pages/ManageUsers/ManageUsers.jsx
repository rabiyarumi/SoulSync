import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const {user}= useAuth()

    // Fetch all users
  const { data: allUsers = [], isLoading , refetch} = useQuery({
    queryKey: ["allUsers"], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/users/${user?.email}`
      );
      return data;
    },
  });


  
  //-----------------------Upgrade biodata
const handleRoleUpdate =  (roleValue, email) => {
    try{
   Swal.fire({
     title: "Are you sure?",
     text: `You Wan't to make this user ${roleValue}`,
     icon: "question",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Request!",
   }).then( async (result)  =>  {
     if (result.isConfirmed) {
       //delete data from database
 
       const { data } =await  axios.patch(
         `${import.meta.env.VITE_API_URL}/users/role/${email}`, {role: roleValue}
       );
       console.log(data)
       Swal.fire({
         icon: "success",
         
         text: `Role Has Been Updated To ${roleValue}`,
         showConfirmButton: false,
         timer: 2000
      });
      refetch()
     }
   })
  }
  catch(error){
   Swal.fire({
     icon: "error",
     title: "Oops...",
     text: `${error.response.data}`,
  })}
 } 
 
 


  if(isLoading) return <LoadingSpinner/>

    return (
        <div>
            Manage Users
            <div className="grid grid-cols-3 gap-4">
                {
                    allUsers?.map(user => (
                        <div key={user?._id} className="p-4 border-2">
                            <h1 className="text-2xl">{user.name}</h1>
                            <p>{user?.email}</p>
                            <p>Role: {user?.role}</p>
                            <p>status: {user?.status}</p>
                            <Button variant="outline">
                                <p onClick={() => handleRoleUpdate('Admin', user?.email)}>Make Admin</p>
                            </Button>
                            
                                <button className="p-4 bg-red-500" disabled={!user?.status == 'Requested' } onClick={() => handleRoleUpdate('Premium', user?.email)}>Make Premium</button>
                           
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageUsers;