import {
  TAcademicDepartment,
  TAcademicFaculty,
  TAcademicSemester,
} from "../../../types/AcademicManagement";
import { TQeryParams, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const AcademicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQeryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/academic-semester",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semester/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculty/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
    getAllacademicFaculty: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQeryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/academic-faculty",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-department/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
    getAllacademicDepartment: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQeryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/academic-department",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const {
  useGetAllSemestersQuery,
  useAddAcademicSemesterMutation,
  useAddAcademicFacultyMutation,
  useGetAllacademicFacultyQuery,
  useAddAcademicDepartmentMutation,
  useGetAllacademicDepartmentQuery,
} = AcademicManagementApi;
