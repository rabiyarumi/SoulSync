import LoadingSpinner from "@/components/shared/LoadingSpinner";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import FavBiodataTable from "./FavBiodataTable";
import SectionHeaders from "@/components/Layouts/SectionHeaders";

const FavouritesBiodata = () => {
  const { user } = useAuth();

  // Fetch Favorite biodata
  const {
    data: favoriteBiodata = [],
    isLoading: isBiodataLoading,
    refetch,
  } = useQuery({
    queryKey: ["favoriteBiodata", user?.email], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/fav-biodatas/${user?.email}`
      );
      return data;
    },
  });

  //----------------delete favorite biodatas-----------------\\
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
            `${import.meta.env.VITE_API_URL}/fav-biodatas/${_id}`
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

  if (isBiodataLoading) return <LoadingSpinner />;

  // ---------------------------------------------

  return (
    <div>
      <SectionHeaders
        title={" My Favorite biodata"}
        coloredTitle={" biodata"}
      />

      {/* --------------------------------------------------------------------- */}

      <Table className="w-full border rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Biodata ID</TableHead>
            <TableHead>Permanent Address</TableHead>
            <TableHead>Occupation</TableHead>
            <TableHead className="text-center">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {favoriteBiodata.map((biodata) => (
            <FavBiodataTable
              key={biodata?._id}
              biodata={biodata}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FavouritesBiodata;
