import { useParams } from "react-router-dom";
import { useGetSingleFacultyQuery } from "../../../redux/features/admin/userManagementApi";
import { Flex, Spin } from "antd";
import FacultyProfile from "../../../components/ui/Student/FacultyProfile";

const FacultyDetails = () => {
  const { studentId } = useParams();
  const { data, isLoading, error } = useGetSingleFacultyQuery(
    studentId as string
  );
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
      <FacultyProfile student={data}></FacultyProfile>
    </div>
  );
};

export default FacultyDetails;
