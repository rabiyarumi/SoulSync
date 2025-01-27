import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ManageUsers = () => {
    const {user}= useAuth()
    // Fetch all users
  const { data: allUsers = [], isLoading , refetch} = useQuery({
    queryKey: ["allUsers"], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/users/${user?.email}`
      );
      return data;
    },
  });

  


  if(isLoading) return <LoadingSpinner/>

    return (
        <div>
            Manage Users
            <div className="grid grid-cols-3 gap-4">
                {
                    allUsers?.map(user => (
                        <div key={user?._id} className="p-4 border-2">
                            <h1 className="text-2xl">{user.name}</h1>
                            <p>{user?.email}</p>
                            <p>Role: {user?.role}</p>
                            <p>status: {user?.status}</p>
                            <Button variant="outline">
                                <p>Make Admin</p>
                            </Button>
                            <Button variant="outline">
                                <p>Make Premium</p>
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageUsers;