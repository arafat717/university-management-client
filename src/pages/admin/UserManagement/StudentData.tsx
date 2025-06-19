import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useState } from "react";
import { TQeryParams } from "../../../types/global";
import { useGetAllStudentQuery } from "../../../redux/features/admin/userManagementApi";
import { TStudent } from "../../../types/UserManageMent";
import { Link } from "react-router-dom";

export type TTableData = Pick<
  TStudent,
  "fullName" | "id" | "email" | "contactNo"
>;

const StudentData = () => {
  const [params, setParams] = useState<TQeryParams[]>([]);
  const [page, setPage] = useState(1);
  const { data: semesterData, isFetching } = useGetAllStudentQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  const metaData = semesterData?.meta;
  const tableData = semesterData?.data?.map(
    ({ _id, fullName, id, email, contactNo }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "Roll",
      dataIndex: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact NO.",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/student/${item?.key}`}>
              <Button>Details</Button>
            </Link>
            <Button>Delete</Button>
            <Button>Block</Button>
          </Space>
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
