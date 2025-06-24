import { FieldValues, SubmitHandler } from "react-hook-form";
import UNForm from "../../../components/form/UNForm";
import { Button, Col, Flex } from "antd";
import UNSelect from "../../../components/form/UNSelect";
import { statusOptions } from "../../../constants/global";
import {
  useAddAcademicSemesterMutation,
  useGetAllSemestersQuery,
} from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TError } from "../../../types/global";
import UNDatePicker from "../../../components/form/UNDatePicker";
import UNInput from "../../../components/form/UNInput";

const CreateSemesterRegistration = () => {
  const [addSemesterRegistration] = useAddAcademicSemesterMutation();
  const { data: semesterData, isLoading: sIsLoading } =
    useGetAllSemestersQuery(undefined);

  const admissionSemesterOptions = semesterData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };
    console.log(semesterData);
    try {
      const res = (await addSemesterRegistration(semesterData)) as TError;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message);
      } else {
        toast.success("Semester Registration Successful!");
      }
    } catch (err) {
      toast.error("Somthing went wrong!");
    }
  };

  return (
    <Flex justify="center">
      <Col span={6}>
        <UNForm
          onSubmit={onSubmit}
          //   resolver={zodResolver(academicSemesterSchema)}
        >
          <UNSelect
            disabled={sIsLoading}
            label="Academic Semester"
            name="academicSemester"
            options={admissionSemesterOptions}
          ></UNSelect>
          <UNSelect
            label="Status"
            name="status"
            options={statusOptions}
          ></UNSelect>
          <UNDatePicker name="startDate" label="Start Date"></UNDatePicker>
          <UNDatePicker name="endtDate" label="End Date"></UNDatePicker>
          <UNInput type="text" name="minCredit" label="Min Credit"></UNInput>
          <UNInput type="text" name="maxCredit" label="Max Credit"></UNInput>
          <Button htmlType="submit">Submit</Button>
        </UNForm>
      </Col>
    </Flex>
  );
};

export default CreateSemesterRegistration;
