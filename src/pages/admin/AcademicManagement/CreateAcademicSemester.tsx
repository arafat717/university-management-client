import { FieldValues, SubmitHandler } from "react-hook-form";
import UNForm from "../../../components/form/UNForm";
import { Button, Col, Flex } from "antd";
import UNSelect from "../../../components/form/UNSelect";
import { monthOptions } from "../../../constants/global";
import { nameOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../Schemas/academicSemesterSchema";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center">
      <Col span={6}>
        <UNForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <UNSelect label="Name" name="name" options={nameOptions}></UNSelect>
          <UNSelect label="Year" name="year" options={yearOptions}></UNSelect>
          <UNSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          ></UNSelect>
          <UNSelect
            label="End Month"
            name="endMonth"
            options={monthOptions}
          ></UNSelect>
          <Button htmlType="submit">Submit</Button>
        </UNForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
