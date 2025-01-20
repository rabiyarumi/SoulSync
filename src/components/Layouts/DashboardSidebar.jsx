import { Button } from '@headlessui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = () => {

    const navItems = [
        { name: "Edit Biodata", path: "/create-biodata" },
        { name: "View Biodata", path: "/view-biodata" },
        { name: "My Contact Request", path: "/my-contact-request" },
        { name: "Favourites Biodata", path: "/favourites-biodata" },
        { name: "Admin Dashboard", path: "/admin-dashboard" },
        { name: "Manage Users", path: "/manage-users" },
        { name: "Approved Premium", path: "/approved-premium" },
        { name: "Approved Contact Request", path: "/approved-contact-request" },
      ];
    const activeClassName = "text-[#800020] font-bold border-b-2 border-[#800020]";
    const inactiveClassName = "text-gray-600 hover:text-[#800020]";

    return (
        <div className='min-h-screen border-2 flex flex-col justify-between p-5'>
            <div className='flex flex-col gap-4'>
            {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }
            >
              {item.name}
            </NavLink>
          ))}
            </div>
          <Button>LogOut</Button>
        </div>
    );
};

export default DashboardSidebar;