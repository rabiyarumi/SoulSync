/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import useAuth from "@/hooks/useAuth";
import { GrUserAdmin } from "react-icons/gr";
import { LuCrown } from "react-icons/lu";

const MangeUsersTable = ({ singleUser, handleRoleUpdate }) => {
  const { user } = useAuth();

  return (
    <TableRow key={singleUser?._id}>
      <TableCell>{singleUser?.name}</TableCell>
      <TableCell>{singleUser?.email}</TableCell>
      <TableCell>{singleUser?.role}</TableCell>
     
      <TableCell>
        <Button >
          <p onClick={() => handleRoleUpdate("Admin", user?.email)}>
          <GrUserAdmin />
          </p>
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Button
          
          disabled={!user?.status == "Requested"}
          onClick={() => handleRoleUpdate("Premium", user?.email)}
        >
            <LuCrown />
         
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default MangeUsersTable;

