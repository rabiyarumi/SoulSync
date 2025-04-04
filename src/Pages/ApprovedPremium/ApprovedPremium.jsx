import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SectionHeaders from '@/components/Layouts/SectionHeaders';


const ApprovedPremium = () => {

     // Fetch similar biodatas only when gender is available
     const { data: requestedUsers = [], isLoading, refetch } = useQuery({
        queryKey: ['requestedUsers'], // Include gender in queryKey
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/requested-users`);
            return data;
        },
        // enabled: !!gender, // Ensure this query runs only when gender is available
    });

    if (isLoading) return <LoadingSpinner/>

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

    return (
        <div>

<SectionHeaders title={""} coloredTitle={"Approved Premium Request"} />

<Table className="w-full border rounded-lg">
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Biodata ID</TableHead>
      <TableHead>Make Premium</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {requestedUsers.map((singleUser) => (
      <ApprovedPremium
        key={singleUser?._id}
        singleUser={singleUser}
        handleRoleUpdate={handleRoleUpdate}
      />
    ))}
  </TableBody>
</Table>


            <h1>Requested User {requestedUsers?.length}</h1>
            <div className="grid grid-cols-3 gap-4">
                            {
                                requestedUsers?.map(user => (
                                    <div key={user?._id} className="p-4 border-2">
                                        <h1 className="text-2xl">{user.name}</h1>
                                        <p>{user?.email}</p>
                                        <p>Biodata Id: {user?.biodataId}</p>
                                        <p>Role: {user?.role}</p>
                                        <p>status: {user?.status}</p>
                                        
                                        <Button variant="outline" onClick={() => handleRoleUpdate('Premium', user?.email)}>
                                            <button>Make Premium</button>
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
        </div>
    );
};

export default ApprovedPremium;