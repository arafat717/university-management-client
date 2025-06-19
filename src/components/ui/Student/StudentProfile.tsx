import { Card, Descriptions, Divider, Image } from "antd";
import { TStudent } from "../../../types/UserManageMent";

const StudentProfile = ({ student: studentdata }: { student: TStudent }) => {
  const student = studentdata.data;
  return (
    <Card title="Student Details" bordered>
      {student.profileImage && (
        <Image
          src={student.profileImage}
          alt={student.fullName}
          width={120}
          style={{ marginBottom: 20 }}
        />
      )}

      <Descriptions title="Basic Information" bordered column={2}>
        <Descriptions.Item label="Roll">{student.id}</Descriptions.Item>
        <Descriptions.Item label="Full Name">
          {student.fullName}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{student.email}</Descriptions.Item>
        <Descriptions.Item label="Gender">{student.gender}</Descriptions.Item>
        <Descriptions.Item label="Date of Birth">
          {new Date(student.dateOfBirth).toLocaleDateString()}
        </Descriptions.Item>
        <Descriptions.Item label="Blood Group">
          {student.bloodGroup}
        </Descriptions.Item>
        <Descriptions.Item label="Contact No">
          {student.contactNo}
        </Descriptions.Item>
        <Descriptions.Item label="Emergency Contact">
          {student.emergencyContactNo}
        </Descriptions.Item>
      </Descriptions>

      <Divider />

      <Descriptions title="Address" bordered column={2}>
        <Descriptions.Item label="Present Address">
          {student.presentAddress}
        </Descriptions.Item>
        <Descriptions.Item label="Permanent Address">
          {student.permanentAddress}
        </Descriptions.Item>
      </Descriptions>

      <Divider />

      <Descriptions title="Academic Info" bordered column={2}>
        <Descriptions.Item label="Department">
          {student.academicDepartment?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Faculty">
          {student.academicDepartment?.academicFaculty?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Admission Semester">
          {student.admissionSemester?.name} {student.admissionSemester?.year}
        </Descriptions.Item>
        <Descriptions.Item label="Start Month">
          {student.admissionSemester?.startMonth}
        </Descriptions.Item>
      </Descriptions>

      <Divider />

      <Descriptions title="Guardian Info" bordered column={2}>
        <Descriptions.Item label="Father's Name">
          {student.gurdian?.fatherName}
        </Descriptions.Item>
        <Descriptions.Item label="Father's Occupation">
          {student.gurdian?.fatherOccupation}
        </Descriptions.Item>
        <Descriptions.Item label="Father's Contact">
          {student.gurdian?.fatherContactNo}
        </Descriptions.Item>
        <Descriptions.Item label="Mother's Name">
          {student.gurdian?.motherName}
        </Descriptions.Item>
        <Descriptions.Item label="Mother's Occupation">
          {student.gurdian?.motherOccupation}
        </Descriptions.Item>
        <Descriptions.Item label="Mother's Contact">
          {student.gurdian?.motherContactNo}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default StudentProfile;
