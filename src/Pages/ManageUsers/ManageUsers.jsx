import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ManageUsers = () => {

    // Fetch all users
  const { data: allUsers = [], isLoading , refetch} = useQuery({
    queryKey: ["allUsers"], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/users`
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
                                <button>Make Admin</button>
                            </Button>
                            <Button variant="outline">
                                <button>Make Premium</button>
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageUsers;