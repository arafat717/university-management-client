import { useState } from "react";
import { useGetAllacademicFacultyQuery } from "../../../redux/features/admin/academicManagementApi";

import { Button, Table, TableColumnsType, TableProps } from "antd";
import { TQeryParams } from "../../../types/global";
import { TAcademicFaculty } from "../../../types/AcademicManagement";

export type TTableData = Pick<TAcademicFaculty, "name">;

const AcademicFaculty = () => {
  const [params, setParams] = useState<TQeryParams[] | undefined>(undefined);
  const { data: semesterData, isFetching } =
    useGetAllacademicFacultyQuery(params);
  const tableData = semesterData?.data.map(({ _id, name }) => ({
    key: _id,
    name,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Action",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
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
    <Table<TTableData>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicFaculty;
