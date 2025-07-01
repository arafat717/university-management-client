import { FieldValues, SubmitHandler } from "react-hook-form";
import UNForm from "../../../components/form/UNForm";
import { Button, Col, Flex } from "antd";
import UNSelect from "../../../components/form/UNSelect";
import { toast } from "sonner";
import { TError } from "../../../types/global";
import UNInput from "../../../components/form/UNInput";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagementApi";

const CreateCourse = () => {
  const [addCourse] = useAddCourseMutation();
  const { data: courseData } = useGetAllCoursesQuery(undefined);

  const admissionSemesterOptions = courseData?.data?.map((item) => ({
    value: item._id,
    label: `${item.title}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses
        ? data.preRequisiteCourses.map((item: string) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };
    try {
      const res = (await addCourse(courseData)) as TError;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message);
      } else {
        toast.success("Course Created Successfully!");
      }
    } catch (err) {
      toast.error("Somthing went wrong!");
    }
  };

  return (
    <Flex justify="center">
      <Col span={6}>
        <UNForm onSubmit={onSubmit}>
          <UNInput type="text" name="title" label="Title"></UNInput>
          <UNInput type="text" name="prefix" label="Prefix"></UNInput>
          <UNInput type="text" name="code" label="Code"></UNInput>
          <UNInput type="text" name="credits" label="Credit"></UNInput>
          <UNSelect
            mode="multiple"
            label="PreRequisiteCourses"
            name="preRequisiteCourses"
            options={admissionSemesterOptions}
          ></UNSelect>
          <Button htmlType="submit">Submit</Button>
        </UNForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
