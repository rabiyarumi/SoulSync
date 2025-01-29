import Container from '@/components/Layouts/Container';
import SectionHeaders from '@/components/Layouts/SectionHeaders';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { Card, CardContent } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from "framer-motion";

const SuccessMarried = () => {
    
     // Fetch similar biodatas only when gender is available
     const { data: successStory = [], isLoading, refetch } = useQuery({
        queryKey: ['successStory'], // Include gender in queryKey
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/married-stories`);
            return data;
        },
        // enabled: !!gender, // Ensure this query runs only when gender is available
    });

    console.log(successStory)

    if (isLoading) return <LoadingSpinner/>
    return (
        <Container>
            <SectionHeaders title={"Explore Our"} coloredTitle={" Married Story"} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {successStory?.slice(0,6).map(story => 
                    <motion.div
                    key={story?._id}
                    className=" relative group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="overflow-hidden rounded-2xl shadow-lg">
                      <div className="relative">
                        <img
                          src={story?.image}
                          alt="Wedding"
                          className="w-full h-52 object-cover rounded-t-2xl"
                        />
                        <motion.div
                          className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {story?.marriedStory}
                        </motion.div>
                      </div>
                      <CardContent className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-[#800020] h-12 lg:h-auto">{story?.brideName} & {story?.groomName}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
            </div>
        </Container>
    );
};

export default SuccessMarried;