import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Biodata from "./Biodata";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import BiodatasFilter from "./BiodatasFilter";
import Container from "@/components/Layouts/Container";
import React, { useState } from "react";

const Biodatads = () => {

    

    const [filters, setFilters] = React.useState({
        gender: "all",
        division: "all",
        minAge: "",
        maxAge: "",
      });
    
      const { data: biodatas = [], isLoading } = useQuery({
        queryKey: ["biodatas", filters], // Include filters in the query key
  
        queryFn: async () => {
            console.log(filters)
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/biodatas`, {
            params: filters, // Pass filters as query params
          });
          return data;
        },
        keepPreviousData: true, // Avoids data flickering during updates
      });
    
      const handleFilterChange = (updatedFilter) => {
        setFilters((prev) => ({ ...prev, ...updatedFilter }));
      };

    // const {data: biodatas=[], isLoading} = useQuery({
    //     queryKey: ['biodatas'],
    //     queryFn: async () => {
    //         const {data} =await axios(`${import.meta.env.VITE_API_URL}/biodatas`)
    //         return data
    //     }
    // })

    //================================================



    if (isLoading) return <LoadingSpinner/>
    
    return (
        <Container>
            <div className=" grid md:grid-cols-4 gap-4">
            <BiodatasFilter filters={filters} onFilterChange={handleFilterChange}/>
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