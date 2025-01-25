import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const useRole = () => {
    const { user, loading } = useAuth();

    // Fetch Favorite biodata
 const { data: role, isLoading, refetch } = useQuery({
   queryKey: ["role", user?.email], 
   enabled: !loading && !!user?.email,
   queryFn: async () => {
     const { data } = await axios(
       `${import.meta.env.VITE_API_URL}/users/role/${user?.email}`
     );
     return data.role;
   },
 });

 if (loading) return <LoadingSpinner />;

    return {role, isLoading, refetch}
};

export default useRole;