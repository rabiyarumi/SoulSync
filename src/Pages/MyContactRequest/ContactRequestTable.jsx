/* eslint-disable react/prop-types */

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Trash2 } from "lucide-react";

const ContactRequestTable = ({ biodata, handleDelete }) => {
  return (
    <TableRow key={biodata?._id}>
      <TableCell>{biodata?.name}</TableCell>
      <TableCell>{biodata?.biodataId}</TableCell>

      <TableCell>
        {biodata?.status === "Purchased" ? (
          <span>{biodata?.contactNumber}</span>
        ) : (
          ""
        )}
      </TableCell>
      <TableCell>
        {biodata?.status === "Purchased" ? (
          <span>{biodata?.contactEmail}</span>
        ) : (
          ""
        )}
      </TableCell>

      <TableCell>{biodata?.status}</TableCell>
      <TableCell className="text-center">
        <Button
          variant="ghost"
          onClick={() => handleDelete(biodata?._id)}
          className="text-[#800020] hover:bg-red-100"
        >
          <Trash2 size={20} />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ContactRequestTable;
