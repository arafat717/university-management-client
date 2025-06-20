import { Button, Col, Divider, Form, Input, Row } from "antd";
import UNForm from "../../../components/form/UNForm";
import UNInput from "../../../components/form/UNInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import UNSelect from "../../../components/form/UNSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import UNDatePicker from "../../../components/form/UNDatePicker";
import { useGetAllacademicDepartmentQuery } from "../../../redux/features/admin/academicManagementApi";
import { useAddFacultyMutation } from "../../../redux/features/admin/userManagementApi";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { TError } from "../../../types/global";
import { FacultyValidationSchema } from "../../../Schemas/userManagementSchema/facultySchema";

const facultyData = {
  designation: "Assistant Professor",
  name: {
    firstName: "John",
    middleName: "M.",
    lastName: "Doe",
  },
  gender: "male",
  dateOfBirth: "1985-06-15T00:00:00.000Z",
  bloogGroup: "O+",

  email: "john.doe@example.com",
  contactNo: "+8801234567890",
  emergencyContactNo: "+8801987654321",
  presentAddress: "123 Street Name, City, Country",
  permanentAddress: "456 Another Street, City, Country",

  academicDepartment: "683420d78caaf526b80c3b08",
};

const CreateFaculty = () => {
  const [addFaculty] = useAddFacultyMutation();
  const { data: departmentData, isLoading: dIsLoading } =
    useGetAllacademicDepartmentQuery(undefined);

  const admissionDepartmentOptions = departmentData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    console.log(data?.image);

    const facultyData = {
      password: "faculty123",
      faculty: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(facultyData));
    formData.append("file", data?.image);
    console.log(Object.fromEntries(formData));
    try {
      const res = (await addFaculty(formData)) as TError;
      if (res?.error) {
        toast.error(res?.error?.data?.message);
        console.log(res?.error?.data?.message);
      } else {
        toast.success("Faculty Created Successfuly!");
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
          resolver={zodResolver(FacultyValidationSchema)}
          defaultValues={facultyData}
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
                name="bloogGroup"
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
              <UNInput
                type="text"
                name="designation"
                label="Designation"
              ></UNInput>
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
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        onChange(file);
                      }}
                    />
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

          <Divider>Academic Info</Divider>
          <Row gutter={8}>
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

export default CreateFaculty;
