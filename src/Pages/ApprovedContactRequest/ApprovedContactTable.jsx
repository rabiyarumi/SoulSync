/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import useAuth from "@/hooks/useAuth";
import { GrUserAdmin } from "react-icons/gr";

const ApprovedContactTable = ({ contact, handleContactAccept }) => {
  const { user } = useAuth();
  return (
    <TableRow key={contact?._id}>
      <TableCell>{contact?.name}</TableCell>
      <TableCell>{contact?.email}</TableCell>
      <TableCell>{contact?.biodataId}</TableCell>

      <TableCell className="text-center">
        <Button
          disabled={!user?.status == "Requested"}
          onClick={() => handleContactAccept(contact?._id)}
        >
          <GrUserAdmin />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ApprovedContactTable;
