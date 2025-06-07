import Dashboard from "../pages/faculty/Dashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse></OfferedCourse>,
  },
];
