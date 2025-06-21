import { TQeryParams, TResponseRedux } from "../../../types/global";
import { TAdmin, TFacylty, TStudent } from "../../../types/UserManageMent";
import { baseApi } from "../../api/baseApi";

const UserManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
    getAllStudent: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQeryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getSingleStudent: builder.query<TStudent, string>({
      query: (id) => ({
        url: `/students/${id}`,
        method: "GET",
      }),
    }),
    addFaculty: builder.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        body: data,
      }),
    }),
    getAllFaculty: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQeryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/faculties",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TFacylty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getSingleFaculty: builder.query<TFacylty, string>({
      query: (id) => ({
        url: `/faculties/${id}`,
        method: "GET",
      }),
    }),
    addAdmin: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      }),
    }),
    getAllAdmin: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQeryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/admins",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAdmin[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getSingleAdmin: builder.query<TAdmin, string>({
      query: (id) => ({
        url: `/admins/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddStudentMutation,
  useGetAllStudentQuery,
  useGetSingleStudentQuery,
  useAddFacultyMutation,
  useAddAdminMutation,
  useGetAllFacultyQuery,
  useGetAllAdminQuery,
  useGetSingleAdminQuery,
  useGetSingleFacultyQuery,
} = UserManagementApi;
