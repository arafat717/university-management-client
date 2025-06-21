import { Button, Col, Divider, Form, Input, Row } from "antd";
import UNForm from "../../../components/form/UNForm";
import UNInput from "../../../components/form/UNInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import UNSelect from "../../../components/form/UNSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import UNDatePicker from "../../../components/form/UNDatePicker";

import { useAddAdminMutation } from "../../../redux/features/admin/userManagementApi";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner"; 
import { TError } from "../../../types/global";
import { AdminValidationSchema } from "../../../Schemas/userManagementSchema/adminSchema";

const CreateFaculty = () => {
  const [addAdmin] = useAddAdminMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    console.log(data?.image);

    const adminData = {
      password: "admin123",
      admin: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(adminData));
    formData.append("file", data?.image);
    console.log(Object.fromEntries(formData));
    try {
      const res = (await addAdmin(formData)) as TError;
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
          resolver={zodResolver(AdminValidationSchema)}
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
              <UNSelect
                disabled={false}
                options={bloodGroupOptions}
                name="bloogGroup"
                label="Blood Group"
              ></UNSelect>
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
          <Button htmlType="submit">Submit</Button>
        </UNForm>
      </Col>
    </Row>
  );
};

export default CreateFaculty;
