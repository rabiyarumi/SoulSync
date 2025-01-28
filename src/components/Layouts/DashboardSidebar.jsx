import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoadingSpinner from "../shared/LoadingSpinner";
import logo from "../../assets/love-small.png";
import { Button } from "../ui/button";

const DashboardSidebar = () => {
  const { user, userLogout } = useAuth();
  const navigate = useNavigate();
  const { role } = useRole();

  const handleLogOut = () => {
    userLogout();
    navigate("/");
  };
  const userNavItems = [
    { name: "My Biodata", path: "create-biodata" },
    { name: "View Biodata", path: "view-biodata" },
    { name: "My Contact Request", path: "my-contact-request" },
    { name: "Favorites Biodata", path: "favorites-biodata" },
    { name: "Add Married Story", path: "got-married" },
  ];
  const adminNavItems = [
    { name: "Admin Dashboard", path: "admin-dashboard" },
    { name: "Manage Users", path: "manage-users" },
    { name: "Approved Premium", path: "approved-premium" },
    { name: "Approved Contact Request", path: "approved-contact-request" },
  ];

  const activeClassName =
    "text-[#800020] font-bold border-b-2 border-[#800020]";
  const inactiveClassName = "text-gray-600 font-bold hover:text-[#800020]";

  return (
    <div className="min-h-screen border-2 flex flex-col justify-between p-5">
      <div>
        {/* Logo and Website Name */}
      <Link to={"/"} className="flex items-center gap-2">
        <img src={logo} alt="Logo" className=" h-12 w-10 " />
        <h1 className="text-xl md:text-2xl font-bold text-[#800020]">
          SoulSync
        </h1>
      </Link>
      <div className="flex flex-col gap-4 mt-6">
        {/* admin navlink */}
        {role === "Admin" ? (
          <>
            {adminNavItems.map((item) => (
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
          </>
        ) : (
          <>
            {userNavItems.map((item) => (
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
          </>
        )}
      </div>
      </div>


      <Link>
        <Button onClick={handleLogOut} className="w-full">LogOut</Button>
      </Link>
     
    </div>
  );
};

export default DashboardSidebar;
