import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPath } from "./admin.routes";
import { routeGenaretor } from "../utils/routesGenaretor";
import { facultyPath } from "./faculty.routes";
import { studentPath } from "./student.route";
import Login from "../pages/Login";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import NeedPasswordChange from "../pages/NeedPasswordChange";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute role={"admin"}>
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenaretor(adminPath),
  },
  {
    path: "faculty",
    element: (
      <ProtectedRoute role={"faculty"}>
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenaretor(facultyPath),
  },
  {
    path: "student",
    element: (
      <ProtectedRoute role={"student"}>
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenaretor(studentPath),
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "password-change",
    element: <NeedPasswordChange></NeedPasswordChange>,
  },
]);
