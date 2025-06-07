import { Layout, Menu } from "antd";
import { sidebarGenarator } from "../../utils/sidebarGenaretor";
import { adminPath } from "../../routes/admin.routes";
import { facultyPath } from "../../routes/faculty.routes";
import { studentPath } from "../../routes/student.route";
const { Sider } = Layout;
const Sidebar = () => {
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "sutdent",
  };

  const role = "faculty";
  let sideBarItems;

  switch (role) {
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
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
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
