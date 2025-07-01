import {
  Button,
  Dropdown,
  Pagination,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from "antd";
import { useState } from "react";
import { TQeryParams } from "../../../types/global";
import {
  useGetAllSemesterRegistrationQuery,
  useUpdateSemesterRegistrationStatusMutation,
} from "../../../redux/features/admin/courseManagementApi";
import { TSemesterRegistration } from "../../../types/CourseManagement";
import moment from "moment";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TTableData = Pick<
  TSemesterRegistration,
  "startDate" | "endDate" | "status"
>;

const items = [
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];

const StudentData = () => {
  const [semesterId, setSemesterId] = useState("");
  const [params, setParams] = useState<TQeryParams[]>([]);
  const [page, setPage] = useState(1);
  const { data: semesterData, isFetching } = useGetAllSemesterRegistrationQuery(
    [{ name: "page", value: page }, { name: "sort", value: "id" }, ...params]
  );

  const [addUpdatedData] = useUpdateSemesterRegistrationStatusMutation();

  const metaData = semesterData?.meta;
  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      startDate: moment(startDate).format("MMMM"),
      endDate: moment(endDate).format("MMMM"),
      status,
      year: academicSemester.year,
    })
  );

  const handleStatusUpdate: SubmitHandler<FieldValues> = (data) => {
    const udatedData = {
      id: semesterId,
      data: {
        status: data.key,
      },
    };
    addUpdatedData(udatedData);
  };

  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      render(item) {
        let color;
        if (item === "UPCOMING") {
          color = "blue";
        }
        if (item === "ONGOING") {
          color = "green";
        }
        if (item === "ENDED") {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(item.key)}>Update</Button>
          </Dropdown>
        );
      },
      width: "1%",
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

export default StudentData;
