import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Biodata = ({biodata}) => {

    const {
        name,
        image,
        gender,
        birth,
        height,
        weight,
        age,
        occupation,
        race,
        fathersName,
        mothersName,
        division,
        district,
        partner,
        contact,
      } = biodata || {}

    return (
        <div>
           <Card>
           <img src={image} alt="" className='h-56  w-full rounded-t-xl'/>
            <CardHeader className="flex flex-row gap-4">
                
                <CardTitle className='text-red-600'>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Age: {age}</p>
                <p>Race: {race}</p>
            </CardContent>
            <CardFooter>
                <Button variant="destructive">View Details</Button>
            </CardFooter>
           </Card>
        </div>
    );
};

export default Biodata;