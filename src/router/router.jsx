import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Teachers from "../pages/Teachers/Teachers";
import TeacherDetails from "../pages/TeacherDetails/TeacherDetails";
import FeeStructure from "../pages/FeeStructure/FeeStructure";
import Admissions from "../pages/Admissions/Admissions";
import ResultPortal from "../pages/ResultPortal/ResultPortal";
import LoginPage from "../pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
        {
          index: true,
          Component: Home
        },
        {
          path: "about",
          Component: About
        },
        {
          path: "gallery",
          Component: Gallery
        },
        {
          path: "teachers",
          Component: Teachers
        },
        {
          path: "/teachers/:id",
          Component: TeacherDetails
        },
        {
          path: "/fees",
          Component: FeeStructure
        },
        {
          path: "/admissions",
          Component: Admissions
        },
        {
          path: "/results",
          Component: ResultPortal
        },
        {
          path: "login",
          Component: LoginPage
        }
      ]
  },  
]);