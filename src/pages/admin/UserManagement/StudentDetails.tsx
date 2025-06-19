import { useParams } from "react-router-dom";
import { useGetSingleStudentQuery } from "../../../redux/features/admin/userManagementApi";
import StudentProfile from "../../../components/ui/Student/StudentProfile";
import { Flex, Spin } from "antd";

const StudentDetails = () => {
  const { studentId } = useParams();
  const { data, isLoading, error } = useGetSingleStudentQuery(
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
      <StudentProfile student={data}></StudentProfile>
    </div>
  );
};

export default StudentDetails;
