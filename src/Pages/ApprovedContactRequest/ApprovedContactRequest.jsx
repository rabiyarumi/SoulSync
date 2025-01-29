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


const ApprovedContactRequest = () => {
  const {
    data: contactRequested = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUsers"], // Include id in queryKey to ensure query invalidation
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
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Biodata ID</TableHead>
      <TableHead>Approved</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {contactRequested.map((contact) => (
      <ApprovedContactRequest
        key={contact?._id}
        contact={contact}
        handleContactAccept={handleContactAccept}
      />
    ))}
  </TableBody>
</Table>


      Approved contact requests
      <div className="grid grid-cols-3 gap-4">
        {contactRequested?.map((contact) => (
          <div key={contact?._id} className="p-4 border-2">
            <p>{contact?.email}</p>
            <p>Biodata Id: {contact?.biodataId}</p>
            <p>Status: {contact?.status}</p>

            <Button variant="outline" onClick={() => handleContactAccept(contact?._id)}>
              <p>Accept</p>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedContactRequest;
