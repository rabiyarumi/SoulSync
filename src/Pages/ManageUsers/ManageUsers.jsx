import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
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
import MangeUsersTable from "./MangeUsersTable";
import SectionHeaders from "@/components/Layouts/SectionHeaders";

const ManageUsers = () => {
  const { user } = useAuth();

  // Fetch all users
  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUsers"], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/users/${user?.email}`
      );
      return data;
    },
  });

  //-----------------------Upgrade biodata
  const handleRoleUpdate = (roleValue, email) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: `You Wan't to make this user ${roleValue}`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Request!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          //delete data from database

          const { data } = await axios.patch(
            `${import.meta.env.VITE_API_URL}/users/role/${email}`,
            { role: roleValue }
          );
          Swal.fire({
            icon: "success",

            text: `Role Has Been Updated To ${roleValue}`,
            showConfirmButton: false,
            timer: 2000,
          });
          refetch();
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

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <SectionHeaders title={""} coloredTitle={" User Management"} />

      <Table className="w-full border rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Make Admin</TableHead>
            <TableHead>Make Premium</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allUsers.map((singleUser) => (
            <MangeUsersTable
              key={singleUser?._id}
              singleUser={singleUser}
              handleRoleUpdate={handleRoleUpdate}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUsers;
