import LoadingSpinner from '@/components/shared/LoadingSpinner';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const FavouritesBiodata = () => {

    const {user} = useAuth()


    // Fetch Favorite biodata 
  const { data: favoriteBiodata = [], isLoading: isBiodataLoading } = useQuery({
    queryKey: ['favoriteBiodata'], // Include id in queryKey to ensure query invalidation
    queryFn: async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/fav-biodatas/${user.email}`);
        return data;
    },
});

console.log(favoriteBiodata)

if (isBiodataLoading ) return <LoadingSpinner/>


    return (
        <div>
            My Favorite biodata
            <h2>hello</h2>

            <div>
            {
                favoriteBiodata?.map(biodata =>
                 <div key={biodata._id} className='flex gap-8'>
                    
                    <h1>{biodata.favBiodata.name}</h1>
                    <h1>{biodata.favBiodata.biodataId}</h1>
                    <button className='text-red-700'>Delete</button>
                   </div>)
            }
            </div>

            
        </div>
    );
};

export default FavouritesBiodata;