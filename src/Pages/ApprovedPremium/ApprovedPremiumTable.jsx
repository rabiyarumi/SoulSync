/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import useAuth from "@/hooks/useAuth";
import { LuCrown } from "react-icons/lu";

const ApprovedPremiumTable = ({ singleUser, handleRoleUpdate }) => {

    const {user} =useAuth()

    return (
       <TableRow key={singleUser?._id}>
             <TableCell>{singleUser?.name}</TableCell>
             <TableCell>{singleUser?.email}</TableCell>
             <TableCell>{singleUser?.biodataId}</TableCell>
            
             
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

export default ApprovedPremiumTable;