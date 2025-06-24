import AcademicDepartment from "../pages/admin/AcademicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/AcademicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/AcademicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/AcademicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/AcademicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Course from "../pages/admin/CourseManagement/Course";
import CreateCourse from "../pages/admin/CourseManagement/CreateCourse";
import CreateOfferedCourse from "../pages/admin/CourseManagement/CreateOfferedCourse";
import CreateSemesterRegistration from "../pages/admin/CourseManagement/CreateSemesterRegistration";
import OfferedCourse from "../pages/admin/CourseManagement/OfferedCourse";
import SemsesterRegisteration from "../pages/admin/CourseManagement/SemsesterRegisteration";
import AdminData from "../pages/admin/UserManagement/AdminData";
import AdminDetails from "../pages/admin/UserManagement/AdminDetails";
import CreateAdmin from "../pages/admin/UserManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/UserManagement/CreateFaculty";
import CreateStudent from "../pages/admin/UserManagement/CreateStudent";
import FacultyData from "../pages/admin/UserManagement/FacultyData";
import FacultyDetails from "../pages/admin/UserManagement/FacultyDetails";
import StudentData from "../pages/admin/UserManagement/StudentData";
import StudentDetails from "../pages/admin/UserManagement/StudentDetails";

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
        name: "Create-Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Student",
        path: "student",
        element: <StudentData></StudentData>,
      },
      {
        path: "student/:studentId",
        element: <StudentDetails></StudentDetails>,
      },
      {
        name: "Create-Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Faculty",
        path: "faculty",
        element: <FacultyData></FacultyData>,
      },
      {
        path: "faculty/:studentId",
        element: <FacultyDetails></FacultyDetails>,
      },
      {
        name: "Create-Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Admin",
        path: "admin",
        element: <AdminData></AdminData>,
      },
      {
        path: "admin/:adminId",
        element: <AdminDetails></AdminDetails>,
      },
    ],
  },
  {
    name: "Course-Management",
    children: [
      {
        name: "Create S.Registration",
        path: "create-semester-registration",
        element: <CreateSemesterRegistration></CreateSemesterRegistration>,
      },
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemsesterRegisteration></SemsesterRegisteration>,
      },
      {
        name: "Create-Course",
        path: "create-course",
        element: <CreateCourse></CreateCourse>,
      },
      {
        name: "Course",
        path: "course",
        element: <Course></Course>,
      },
      {
        name: "Create O.Course",
        path: "create-offered-course",
        element: <CreateOfferedCourse></CreateOfferedCourse>,
      },
      {
        name: "Offered Course",
        path: "Offered-ourse",
        element: <OfferedCourse></OfferedCourse>,
      },
    ],
  },
];
