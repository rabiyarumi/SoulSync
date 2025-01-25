import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import useUserBiodata from "@/hooks/useUserBiodata";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const ViewBiodata = () => {

    const { user } = useAuth();
    const {myBiodata} = useUserBiodata()

 

  // console.log(myBiodata);

  const {
    name,
    image: imageUrl,
    gender,
    birth,
    height,
    weight,
    age,
    occupation,
    race,
    fathersName,
    mothersName,
    division,
    district,
    partner,
    contact,
    biodataId
  } = myBiodata || {}



    return (
        <div>
            <h2>My Biodata</h2>
            <h2>Name: {name}</h2>
            <h2>Email: {contact.email}</h2>
            <h2>biodata Id: {biodataId}</h2>

            <Button variant="outline" >Delete</Button>

        </div>
    );
};

export default ViewBiodata;