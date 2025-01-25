import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useUserBiodata = () => {
    const { user, loading } = useAuth();

     // Fetch Favorite biodata
  const { data: myBiodata = [], isLoading: isBiodataLoading } = useQuery({
    queryKey: ["myBiodata", user?.email], 
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/myBiodata/${user?.email}`
      );
      return data;
    },
  });

  if (isBiodataLoading) return <LoadingSpinner />;


    return {myBiodata, isBiodataLoading}
};

export default useUserBiodata;