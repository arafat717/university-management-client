import { FieldValues, SubmitHandler } from "react-hook-form";
import UNForm from "../../../components/form/UNForm";
import UNInput from "../../../components/form/UNInput";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../Schemas/academicFacultySchema";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TError } from "../../../types/global";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = (await addAcademicFaculty(data)) as TError;
      if (res?.error) {
        toast.error(res?.error?.data?.message);
      } else {
        toast.success("Academic Faculty Created Successfuly!");
      }
    } catch (err) {
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <Flex justify="center">
      <Col span={6}>
        <UNForm
          onSubmit={handleSubmit}
          resolver={zodResolver(academicFacultySchema)}
        >
          <UNInput type="text" name="name" label="Academic Faculty"></UNInput>
          <Button htmlType="submit">Submit</Button>
        </UNForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
