import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Biodatas from "@/Pages/AllBiodatas/Biodatas";
import AboutUs from "@/Pages/AboutUs/AboutUs";
import ContactUs from "@/Pages/ContactUs/ContactUs";
import Register from "@/Pages/Register/Register";
import DashboardLayout from "@/layouts/Dashboard/DashboardLayout";
import CreateBiodata from "@/Pages/CreateBiodata/CreateBiodata";
import ViewBiodata from "@/Pages/ViewBiodata/ViewBiodata";
import MyContactRequest from "@/Pages/MyContactRequest/MyContactRequest";
import FavouritesBiodata from "@/Pages/FavouritesBiodata/FavouritesBiodata";
import ManageUsers from "@/Pages/ManageUsers/ManageUsers";
import AdminDashboard from "@/Pages/AdminDashboard/AdminDashboard";
import ApprovedPremium from "@/Pages/ApprovedPremium/ApprovedPremium";
import ApprovedContactRequest from "@/Pages/ApprovedContactRequest/ApprovedContactRequest";
import Login from "@/Pages/Login/Login";
import Details from "@/Pages/BiodataDetails.jsx/Details";
import PrivateRoute from "./PrivateRoute";
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
          path: "/biodata/:id",
          element: <PrivateRoute>
            <Details/>
          </PrivateRoute>
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
        {
          path: "create-biodata",
          element: <CreateBiodata/>
        },
        {
          path: "view-biodata",
          element: <ViewBiodata/>
        },
        {
          path: "my-contact-request",
          element: <MyContactRequest/>
        },
        {
          path: "favorites-biodata",
          element: <FavouritesBiodata/>
        },
        {
          path: "admin-dashboard",
          element: <AdminDashboard/>
        },
        {
          path: "manage-users",
          element: <ManageUsers/>
        },
        {
          path: "approved-premium",
          element: <ApprovedPremium/>
        },
        {
          path: "approved-contact-request",
          element: <ApprovedContactRequest/>
        },
      ]
    }
  ]);

export default router;