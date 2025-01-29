import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import SectionHeaders from "@/components/Layouts/SectionHeaders";
import ApprovedContactTable from "./ApprovedContactTable";


const ApprovedContactRequest = () => {
  const {
    data: allContactsRequest = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allContactsRequest"], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/purchase-contacts`
      );
      return data;
    },
  });


  if(isLoading) return <LoadingSpinner/>

  //-----------------------Upgrade biodata
 const handleContactAccept =  (id) => {
    try{
   Swal.fire({
     title: "Are you sure?",
     text: `You Wan't to accept this Contact Request`,
     icon: "question",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Request!",
   }).then( async (result)  =>  {
     if (result.isConfirmed) {
       //delete data from database
 
       const { data } =await  axios.patch(
         `${import.meta.env.VITE_API_URL}/purchase-contacts/${id}`
       );
       console.log(data)
       Swal.fire({
         icon: "success",
         
         text: `Contact Request has been Accepted`,
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

<SectionHeaders title={""} coloredTitle={"Approved contact requests"} />

<Table className="w-full border rounded-lg">
  <TableHeader>
    <TableRow>
      <TableHead>Email</TableHead>
      <TableHead>Biodata ID</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Approved</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>

    
    {allContactsRequest?.map((contact) => (
      <ApprovedContactTable
        key={contact?._id}
        contact={contact}
        handleContactAccept={handleContactAccept}
      />
    ))}
  </TableBody>
</Table>


    </div>
  );
};

export default ApprovedContactRequest;
