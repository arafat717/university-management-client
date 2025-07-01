import {
  Button,
  Modal,
  Pagination,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useState } from "react";
import { TQeryParams } from "../../../types/global";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagementApi";
import { TCourse } from "../../../types/CourseManagement";
import UNForm from "../../../components/form/UNForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import UNSelect from "../../../components/form/UNSelect";
import { useGetAllFacultyQuery } from "../../../redux/features/admin/userManagementApi";

export type TTableData = Pick<TCourse, "title" | "code">;

const Course = () => {
  const [params, setParams] = useState<TQeryParams[]>([]);
  const [page, setPage] = useState(1);
  const { data: courseData, isFetching } = useGetAllCoursesQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const metaData = courseData?.meta;
  const tableData = courseData?.data?.map(({ _id, title, code }) => ({
    key: _id,
    title,
    code,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      dataIndex: "title",
    },

    {
      title: "Code",
      dataIndex: "code",
    },
    {
      title: "Action",
      render: (item) => {
        return <FacultyModal data={item}></FacultyModal>;
      },
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQeryParams[] = [];
      filters.name?.forEach((item) => {
        queryParams.push({ name: "name", value: item });
      });
      filters.year?.forEach((item) => {
        queryParams.push({ name: "year", value: item });
      });
      setParams(queryParams);
    }
  };
  return (
    <>
      <Table<TTableData>
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={false}
      />
      <Pagination
        style={{ marginTop: "25px" }}
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      ></Pagination>
    </>
  );
};

const FacultyModal = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(data.key);

  const { data: facultyData, isLoading: sIsLoading } =
    useGetAllFacultyQuery(undefined);

  const facutlyOptions = facultyData?.data?.map((item) => ({
    value: item._id,
    label: `${item.fullName}`,
  }));

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Add Faculty</Button>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <UNForm onSubmit={handleSubmit}>
          <UNSelect
            disabled={sIsLoading}
            options={facutlyOptions}
            label="Select Faculty"
            name="faculties"
            mode="multiple"
          ></UNSelect>
          <Button htmlType="submit">Submit</Button>
        </UNForm>
      </Modal>
    </>
  );
};

export default Course;
