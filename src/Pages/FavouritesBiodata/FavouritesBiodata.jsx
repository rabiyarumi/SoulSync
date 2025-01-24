import LoadingSpinner from '@/components/shared/LoadingSpinner';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const FavouritesBiodata = () => {

    const {user} = useAuth()


    // Fetch Favorite biodata 
  const { data: favBiodata = {}, isLoading: isBiodataLoading } = useQuery({
    queryKey: ['favBiodata'], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/fav-biodatas/${user.email}`);
        return data;
    },
});

console.log(favBiodata)

if (isBiodataLoading ) return <LoadingSpinner/>
    return (
        <div>
            Favourate biodata
        </div>
    );
};

export default FavouritesBiodata;