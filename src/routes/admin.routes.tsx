import AdminDashboard from "../pages/AdminDashboard";
import CreateAdmin from "../pages/CreateAdmin";
import CreateFaculty from "../pages/CreateFaculty";
import CreateStudent from "../pages/CreateStudent";

export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "User-Management",
    children: [
      {
        name: "Create-Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create-Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create-Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
];
