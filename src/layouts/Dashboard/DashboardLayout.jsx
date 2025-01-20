import DashboardSidebar from '@/components/Layouts/DashboardSidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex min-h-screen'>
            <DashboardSidebar/>
            <div className='flex-1 border-2'>
                <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;