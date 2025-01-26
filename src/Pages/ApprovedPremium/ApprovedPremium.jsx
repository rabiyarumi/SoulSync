import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ApprovedPremium = () => {

     // Fetch similar biodatas only when gender is available
     const { data: requestedUser = [], isLoading } = useQuery({
        queryKey: ['requestedUser'], // Include gender in queryKey
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/users?status=requested`);
            return data;
        },
        // enabled: !!gender, // Ensure this query runs only when gender is available
    });

    if (isLoading) return <LoadingSpinner/>

    console.log(requestedUser)


    return (
        <div>
            <h1>Requested User {requestedUser.length}</h1>
            <div className="grid grid-cols-3 gap-4">
                            {
                                requestedUser?.map(user => (
                                    <div key={user?._id} className="p-4 border-2">
                                        <h1 className="text-2xl">{user.name}</h1>
                                        <p>{user?.email}</p>
                                        <p>Role: {user?.role}</p>
                                        <p>status: {user?.status}</p>
                                        
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

export default ApprovedPremium;