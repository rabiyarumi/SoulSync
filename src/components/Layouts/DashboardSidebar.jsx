import useAuth from '@/hooks/useAuth';
import { Button } from '@headlessui/react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const DashboardSidebar = () => {
 const {user, userLogout} = useAuth()
 const navigate = useNavigate()

  const handleLogOut = () => {
    userLogout()
    navigate('/')
  }
    const navItems = [
        { name: "Home", path: "/" },
        { name: "My Biodata", path: "create-biodata" },
        { name: "View Biodata", path: "view-biodata" },
        { name: "My Contact Request", path: "my-contact-request" },
        { name: "Favorites Biodata", path: "favorites-biodata" },
        { name: "Admin Dashboard", path: "admin-dashboard" },
        { name: "Manage Users", path: "manage-users" },
        { name: "Approved Premium", path: "approved-premium" },
        { name: "Approved Contact Request", path: "approved-contact-request" },
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
            <Link>
            <Button onClick={handleLogOut}>LogOut</Button>
            </Link>
            <p>{user?.displayName}</p>
        </div>
    );
};

export default DashboardSidebar;