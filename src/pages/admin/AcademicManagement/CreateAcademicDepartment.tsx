import { FieldValues, SubmitHandler } from "react-hook-form";
import UNForm from "../../../components/form/UNForm";
import UNInput from "../../../components/form/UNInput";
import UNSelect from "../../../components/form/UNSelect";
import { Button, Col, Flex } from "antd";
import {
  useAddAcademicDepartmentMutation,
  useGetAllacademicFacultyQuery,
} from "../../../redux/features/admin/academicManagementApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicDepartmentSchema } from "../../../Schemas/academicDepartmentSchemas";
import { TError } from "../../../types/global";
import { toast } from "sonner";

const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const { data } = useGetAllacademicFacultyQuery([]);
  const facultyOptions =
    data?.data.map((item) => ({
      value: item._id,
      label: item.name,
    })) ?? [];

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = (await addAcademicDepartment(data)) as TError;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message);
      } else {
        toast.success("Academic Department Created Successfuly!");
      }
    } catch (err) {
      toast.error("Somthing went wrong!");
    }
  };

  return (
    <Flex justify="center">
      <Col span={6}>
        <UNForm
          onSubmit={handleSubmit}
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <UNInput type="text" name="name" label="Department Name"></UNInput>
          <UNSelect
            name="academicFaculty"
            label="Academic Faculty"
            options={facultyOptions}
          ></UNSelect>
          <Button htmlType="submit">Submit</Button>
        </UNForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
