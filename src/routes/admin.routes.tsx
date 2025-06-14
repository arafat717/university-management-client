import AcademicDepartment from "../pages/admin/AcademicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/AcademicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/AcademicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/AcademicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/AcademicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester></CreateAcademicSemester>,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester></AcademicSemester>,
      },
      {
        name: "Create A. faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty></CreateAcademicFaculty>,
      },
      {
        name: "Academic faculty",
        path: "academic-faculty",
        element: <AcademicFaculty></AcademicFaculty>,
      },
      {
        name: "Create A. department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment></CreateAcademicDepartment>,
      },
      {
        name: "Academic department",
        path: "academic-department",
        element: <AcademicDepartment></AcademicDepartment>,
      },
    ],
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
