import { Button, Col, Divider, Form, Input, Row } from "antd";
import UNForm from "../../../components/form/UNForm";
import UNInput from "../../../components/form/UNInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import UNSelect from "../../../components/form/UNSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import UNDatePicker from "../../../components/form/UNDatePicker";
import {
  useGetAllacademicDepartmentQuery,
  useGetAllSemestersQuery,
} from "../../../redux/features/admin/academicManagementApi";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagementApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { StudentValidationSchema } from "../../../Schemas/userManagementSchema/studentSchema";
import { toast } from "sonner";
import { TError } from "../../../types/global";

const CreateStudent = () => {
  const [addStudent] = useAddStudentMutation();
  const { data: semesterData, isLoading: sIsLoading } =
    useGetAllSemestersQuery(undefined);
  const { data: departmentData, isLoading: dIsLoading } =
    useGetAllacademicDepartmentQuery(undefined);
  const admissionSemesterOptions = semesterData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  const admissionDepartmentOptions = departmentData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const studentdata = {
      password: "student123",
      student: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentdata));
    formData.append("file", data?.image);
    try {
      const res = (await addStudent(formData)) as TError;
      if (res?.error) {
        toast.error(res?.error?.data?.message);
        console.log(res?.error?.data?.message);
      } else {
        toast.success("Student Created Successfuly!");
      }
    } catch (err) {
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <Row>
      <Col span={24}>
        <UNForm
          onSubmit={handleSubmit}
          resolver={zodResolver(StudentValidationSchema)}
        >
          <Row gutter={8}>
            <Divider>Personal Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="name.firstName"
                label="First Name"
              ></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="name.middleName"
                label="Middle Name"
              ></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="name.lastName"
                label="Last Name"
              ></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNDatePicker
                name="dateOfBirth"
                label="Date Of Birth"
              ></UNDatePicker>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNSelect
                disabled={false}
                options={bloodGroupOptions}
                name="bloodGroup"
                label="Blood Group"
              ></UNSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNSelect
                disabled={false}
                options={genderOptions}
                name="gender"
                label="Gender"
              ></UNSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    ></Input>
                  </Form.Item>
                )}
              />
            </Col>
            <Divider>Contact Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput type="text" name="email" label="Email"></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="contactNo"
                label="Contact No."
              ></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact No."
              ></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="presentAddress"
                label="Present Address"
              ></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              ></UNInput>
            </Col>
          </Row>
          <Divider>Gurdian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="gurdian.fatherName"
                label="Father Name"
              ></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="gurdian.fatherOccupation"
                label="Father Occupation"
              ></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="gurdian.fatherContactNo"
                label="Father Contact No."
              ></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="gurdian.motherName"
                label="Mother Name"
              ></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="gurdian.motherOccupation"
                label="Mother Occupation"
              ></UNInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNInput
                type="text"
                name="gurdian.motherContactNo"
                label="Mother Contact No."
              ></UNInput>
            </Col>
          </Row>
          <Divider>Academic Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNSelect
                options={admissionSemesterOptions}
                disabled={sIsLoading}
                name="admissionSemester"
                label="Admission Semester"
              ></UNSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UNSelect
                options={admissionDepartmentOptions}
                disabled={dIsLoading}
                name="academicDepartment"
                label="Academic Department"
              ></UNSelect>
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </UNForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
