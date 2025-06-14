import { FieldValues, SubmitHandler } from "react-hook-form";
import UNForm from "../../../components/form/UNForm";
import UNInput from "../../../components/form/UNInput";
import { Button, Col, Flex } from "antd";
import UNSelect from "../../../components/form/UNSelect";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center">
      <Col span={6}>
        <UNForm onSubmit={onSubmit}>
          <UNInput type="text" name="name" label="Name"></UNInput>
          <UNInput type="text" name="year" label="Year"></UNInput>
          <UNSelect label={"Select"}></UNSelect>
          <Button htmlType="submit">Submit</Button>
        </UNForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
