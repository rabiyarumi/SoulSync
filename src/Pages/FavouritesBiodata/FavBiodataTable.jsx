/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Trash2 } from "lucide-react";

const FavBiodataTable = ({biodata, handleDelete}) => {
    const singleBiodata = biodata.favBiodata
    return (
        
        
            <TableRow key={singleBiodata?._id}>
              <TableCell>{singleBiodata?.name}</TableCell>
              <TableCell>{singleBiodata?.biodataId}</TableCell>
              <TableCell>{singleBiodata?.district}, {singleBiodata?.division}</TableCell>
              <TableCell>{singleBiodata?.occupation}</TableCell>
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

export default FavBiodataTable;