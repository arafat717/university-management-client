import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import { adminPath } from "./admin.routes";
import { routeGenaretor } from "../utils/routesGenaretor";
import { facultyPath } from "./faculty.routes";
import { studentPath } from "./student.route";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "admin",
    element: <App></App>,
    children: routeGenaretor(adminPath),
  },
  {
    path: "faculty",
    element: <App></App>,
    children: routeGenaretor(facultyPath),
  },
  {
    path: "student",
    element: <App></App>,
    children: routeGenaretor(studentPath),
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);
