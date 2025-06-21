import { useParams } from "react-router-dom";
import { useGetSingleAdminQuery } from "../../../redux/features/admin/userManagementApi";
import { Flex, Spin } from "antd";
import AdminProfile from "../../../components/ui/Student/AdminProfile";

const AdminDetails = () => {
  const { adminId } = useParams();
  const { data, isLoading, error } = useGetSingleAdminQuery(adminId as string);
  if (isLoading || !data)
    return (
      <>
        <Flex justify="center" align="middle">
          <Spin size="large" />
        </Flex>
      </>
    );
  if (error) return <p>Error loading student.</p>;
  return (
    <div>
      <AdminProfile student={data}></AdminProfile>
    </div>
  );
};

export default AdminDetails;
