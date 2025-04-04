import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import ContactRequestTable from "./ContactRequestTable";
import SectionHeaders from "@/components/Layouts/SectionHeaders";

const MyContactRequest = () => {
  const { user } = useAuth();

  // Fetch Favorite biodata
  const {
    data: contactRequest = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["contactRequest", user?.email], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/purchase-contacts/${user?.email}`
      );
      
      return data;
    },
  });

  //   ----------------delete favorite biodatas-----------------\\
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
            `${import.meta.env.VITE_API_URL}/purchase-contacts/${_id}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your Biodata been deleted.",
            icon: "success",
          });
          refetch();
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

  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
     <SectionHeaders
        title={" My Contact"}
        coloredTitle={" Request"}
      />

{/* ------------------------------- */}
<Table className="w-full border rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Biodata ID</TableHead>
            <TableHead>Mobile No</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contactRequest.map((biodata) => (
            <ContactRequestTable
              key={biodata?._id}
              biodata={biodata}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>


      {/* <div>
        {contactRequest.length > 0 ? (
          <div>
            {contactRequest?.map((biodata) => (
              <div key={biodata?._id} className="flex gap-8">
                <h1>{biodata.name}</h1>
                <h1>{biodata.biodataId}</h1>
                <h1>{biodata.status}</h1>
                {biodata?.status == "Purchased" ? (
                  <h1>{biodata?.contactEmail}</h1>
                ) : (
                  ""
                )}
                {biodata?.status == "Purchased" ? (
                  <h1>{biodata?.contactNumber}</h1>
                ) : (
                  ""
                )}
                {biodata?.status != "Purchased" ? (
                  <button className="text-red-700">
                    <p onClick={() => handleDelete(biodata?._id)}>Delete</p>
                  </button>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p>You Have No Contact Request</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default MyContactRequest;
