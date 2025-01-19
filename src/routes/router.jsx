import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Biodatas from "@/Pages/AllBiodatas/Biodatas";
import AboutUs from "@/Pages/AboutUs/AboutUs";
import ContactUs from "@/Pages/ContactUs/ContactUs";
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
          element: <Home/>
        },
        {
          path: "/register",
          element: <Home/>
        },
      ]
    },
  ]);

export default router;