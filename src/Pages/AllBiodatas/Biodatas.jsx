import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Biodata from "./Biodata";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import BiodatasFilter from "./BiodatasFilter";
import Container from "@/components/Layouts/Container";

const Biodatads = () => {

    const {data: biodatas=[], isLoading} = useQuery({
        queryKey: ['biodatas'],
        queryFn: async () => {
            const {data} =await axios(`${import.meta.env.VITE_API_URL}/biodatas`)
            return data
        }
    })

    if (isLoading) return <LoadingSpinner/>
    
    return (
        <Container>
            <div className=" grid md:grid-cols-4 gap-4">
            <BiodatasFilter/>
            {
                biodatas && biodatas.length>0 ? 
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 col-span-3">
                    {
                        biodatas.map(biodata => <Biodata key={biodata?._id} biodata={biodata}/>)
                    }
                </div>
                : 
                <> <p>No Data Found</p> </>
                
            }
        </div>
        </Container>
    );
};

export default Biodatads;