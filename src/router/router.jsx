import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Teachers from "../pages/Teachers/Teachers";

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
        }
    ]
  },  
]);