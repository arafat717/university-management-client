import { Button, Table, TableColumnsType, TableProps } from "antd";
import { TTableData } from "./AcademicFaculty";
import { TQeryParams } from "../../../types/global";
import { useState } from "react";
import { useGetAllacademicDepartmentQuery } from "../../../redux/features/admin/academicManagementApi";

const AcademicDepartment = () => {
  const [params, setParams] = useState<TQeryParams[] | undefined>(undefined);
  const { data: departmentData, isFetching } =
    useGetAllacademicDepartmentQuery(params);
  // console.log(departmentData?.meta);
  const tableData = departmentData?.data.map(
    ({ _id, name, academicFaculty }) => ({
      key: _id,
      name,
      academicFaculty,
    })
  );

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

export default AcademicDepartment;
