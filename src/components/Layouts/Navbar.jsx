import  { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button  } from "@headlessui/react";
import { HiOutlineMenu } from "react-icons/hi";
import logo from "../../assets/love-small.png"
import useAuth from "@/hooks/useAuth";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {user, userLogout} = useAuth()

    const handleLogOut = () => {
      userLogout()
    }

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Biodatas", path: "/biodatas" },
        { name: "About Us", path: "/about-us" },
        { name: "Contact Us", path: "/contact-us" },
      ];
    
      const activeClassName = "text-[#800020] font-bold border-b-2 border-[#800020]";
      const inactiveClassName = "text-gray-600 hover:text-[#800020]";
    
    return (
        <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Website Name */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className=" h-12 w-10 " />
          <h1 className="text-xl md:text-2xl font-bold text-[#800020]">SoulSync</h1>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex gap-6">
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
          {user && (
           <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }
            >
              Dashboard
            </NavLink>
            <Link>
            <Button onClick={handleLogOut}>LogOut</Button>
            </Link>
            <p>{user?.displayName}</p>
            </>
            
          )}
        </div>

        {/* Right Section */}
        <div className=" hidden md:flex items-center">
          {
            user ? <img src={user.photoURL} className="h-10 rounded-full"/>  : 
            <Link to={"/login"}>
            <Button>Login</Button></Link>
          }
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiOutlineMenu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 ${
                  isActive ? "text-dark-burgundy font-bold" : "text-gray-700"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          {user ? (
            <NavLink
              to="/dashboard"
              className="block px-4 py-2 text-gray-700 hover:text-dark-burgundy"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </NavLink>
          ) : <Button>Login</Button>}
        </div>
      )}
    </nav>
    );
};

export default Navbar;