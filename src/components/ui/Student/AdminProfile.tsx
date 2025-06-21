import { Card, Descriptions, Divider, Image } from "antd";
import { TAdmin } from "../../../types/UserManageMent";

const AdminProfile = ({ student: studentdata }: { student: TAdmin }) => {
  const student = studentdata?.data;
  return (
    <Card title="Student Details" bordered>
      {student?.profileImage && (
        <Image
          src={student?.profileImage}
          alt={student.fullName}
          width={120}
          style={{ marginBottom: 20 }}
        />
      )}

      <Descriptions title="Basic Information" bordered column={2}>
        <Descriptions.Item label="Roll">{student?.id}</Descriptions.Item>
        <Descriptions.Item label="Full Name">
          {student?.fullName}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{student?.email}</Descriptions.Item>
        <Descriptions.Item label="Gender">{student?.gender}</Descriptions.Item>
        <Descriptions.Item label="Date of Birth">
          {new Date(student?.dateOfBirth).toLocaleDateString()}
        </Descriptions.Item>
        <Descriptions.Item label="Blood Group">
          {student?.bloogGroup}
        </Descriptions.Item>
        <Descriptions.Item label="Contact No">
          {student?.contactNo}
        </Descriptions.Item>
        <Descriptions.Item label="Emergency Contact">
          {student?.emergencyContactNo}
        </Descriptions.Item>
      </Descriptions>

      <Divider />

      <Descriptions title="Address" bordered column={2}>
        <Descriptions.Item label="Present Address">
          {student?.presentAddress}
        </Descriptions.Item>
        <Descriptions.Item label="Permanent Address">
          {student?.permanentAddress}
        </Descriptions.Item>
      </Descriptions>

      <Divider />
    </Card>
  );
};

export default AdminProfile;
