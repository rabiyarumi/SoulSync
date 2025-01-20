import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Biodatas from "@/Pages/AllBiodatas/Biodatas";
import AboutUs from "@/Pages/AboutUs/AboutUs";
import ContactUs from "@/Pages/ContactUs/ContactUs";
import Login from "@/Pages/Login/Login";
import Register from "@/Pages/Register/Register";
import DashboardLayout from "@/layouts/Dashboard/DashboardLayout";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/biodatas",
          element: <Biodatas/>
        },
        {
          path: "/about-us",
          element: <AboutUs/>
        },
        {
          path: "/contact-us",
          element: <ContactUs/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout/>,
      children: [
        
      ]
    }
  ]);

export default router;