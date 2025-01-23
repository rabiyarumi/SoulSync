/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Biodata = ({biodata}) => {

    const {
        _id,
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
        <Link to={`/biodata/${_id}`}>
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
                <Link to={`/biodata/${_id}`}>
                <Button variant="destructive">View Details</Button></Link>
            </CardFooter>
           </Card>
        </Link>
    );
};

export default Biodata;