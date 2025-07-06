import { Layout, Menu } from "antd";
import { sidebarGenarator } from "../../utils/sidebarGenaretor";
import { adminPath } from "../../routes/admin.routes";
import { facultyPath } from "../../routes/faculty.routes";
import { studentPath } from "../../routes/student.route";
import { useAppSelector } from "../../redux/features/hooks";
import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
const { Sider } = Layout;
const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token);
  }
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "sutdent",
  };

  let sideBarItems;

  switch ((user as TUser)?.role) {
    case userRole.ADMIN:
      sideBarItems = sidebarGenarator(adminPath, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBarItems = sidebarGenarator(facultyPath, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideBarItems = sidebarGenarator(studentPath, userRole.STUDENT);
      break;
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        UN MANAGMENT
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;
