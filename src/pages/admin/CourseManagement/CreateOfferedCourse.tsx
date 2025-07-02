import { FieldValues, SubmitHandler } from "react-hook-form";
import UNForm from "../../../components/form/UNForm";
import { Button, Col, Flex } from "antd";
import UNSelect from "../../../components/form/UNSelect";
import { toast } from "sonner";
import { TError } from "../../../types/global";
import UNInput from "../../../components/form/UNInput";
import {
  useAddOfferedCourseMutation,
  useGetAllCoursesQuery,
  useGetAllSemesterRegistrationQuery,
  useGetCourseFacultiesQuery,
} from "../../../redux/features/admin/courseManagementApi";
import {
  useGetAllacademicDepartmentQuery,
  useGetAllacademicFacultyQuery,
} from "../../../redux/features/admin/academicManagementApi";
import { weekdaysOptions } from "../../../constants/global";
import UNTimePicker from "../../../components/form/UNTimePicket";
import UNSelectWithWatch from "../../../components/form/UNSelectWithWatch";
import { useState } from "react";
import moment from "moment";

type mapOptions = { _id: string; fullName: string };

const CreateOfferedCourse = () => {
  const [courseId, setCourseId] = useState("");
  const [addOfferedCourse] = useAddOfferedCourseMutation();
  const { data: semesterRegistrationData } =
    useGetAllSemesterRegistrationQuery(undefined);
  const { data: academicFaculty } = useGetAllacademicFacultyQuery(undefined);
  const { data: academicDepartment } =
    useGetAllacademicDepartmentQuery(undefined);
  const { data: course } = useGetAllCoursesQuery(undefined);
  const { data: facultiesData, isFetching: fetchingFaculties } =
    useGetCourseFacultiesQuery(courseId, { skip: !courseId });

  const facultiesOptions = facultiesData?.data?.faculties?.map(
    (item: mapOptions) => ({
      value: item._id,
      label: item.fullName,
    })
  );

  const semesterRegistrationOptions = semesterRegistrationData?.data?.map(
    (item) => ({
      value: item._id,
      label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    })
  );

  const academicFacultyOptions = academicFaculty?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const academicDepartmentOptions = academicDepartment?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  const courseOptions = course?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const semesterData = {
      ...data,
      maxCapacity: Number(data.maxCapacity),
      section: Number(data.section),
      startTime: moment(new Date(data.startTime)).format("HH:mm"),
      endTime: moment(new Date(data.endTime)).format("HH:mm"),
    };
    console.log(semesterData);
    try {
      const res = (await addOfferedCourse(semesterData)) as TError;
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
      <Col span={6} className="grid grid-cols-3">
        <UNForm
          onSubmit={onSubmit}
          //   resolver={zodResolver(academicSemesterSchema)}
        >
          <UNSelect
            label="Semester Registration"
            name="semesterRegistration"
            options={semesterRegistrationOptions}
          ></UNSelect>
          <UNSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={academicFacultyOptions}
          ></UNSelect>
          <UNSelect
            label="Academic Department"
            name="academicDepartmenet"
            options={academicDepartmentOptions}
          ></UNSelect>
          <UNSelectWithWatch
            onValueChange={setCourseId}
            label="Course"
            name="course"
            options={courseOptions}
          ></UNSelectWithWatch>
          <UNSelect
            disabled={!courseId || fetchingFaculties}
            options={facultiesOptions}
            name="faculty"
            label="Faculty"
          ></UNSelect>
          <UNInput
            type="text"
            name="maxCapacity"
            label="Max Capacity"
          ></UNInput>
          <UNInput type="text" name="section" label="Section"></UNInput>
          <UNSelect
            mode="multiple"
            label="Days"
            name="days"
            options={weekdaysOptions}
          ></UNSelect>
          <UNTimePicker name="startTime" label="Start Time"></UNTimePicker>
          <UNTimePicker name="endTime" label="End Time"></UNTimePicker>
          <Button htmlType="submit">Submit</Button>
        </UNForm>
      </Col>
    </Flex>
  );
};

export default CreateOfferedCourse;
