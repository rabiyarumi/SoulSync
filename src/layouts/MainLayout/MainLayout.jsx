import Footer from '@/components/Layouts/Footer';
import Navbar from '@/components/Layouts/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar/>
            <div className='flex-grow'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;