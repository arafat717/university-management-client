import { TQeryParams, TResponseRedux } from "../../../types/global";
import { TStudent } from "../../../types/UserManageMent";
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
    // getAllStudent: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();
    //     if (args) {
    //       args.forEach((item: TQeryParams) =>
    //         params.append(item.name, item.value as string)
    //       );
    //     }
    //     return {
    //       url: "/students",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response: TResponseRedux<TStudent[]>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),
    // getSingleStudent: builder.query<TStudent, string>({
    //   query: (id) => ({
    //     url: `/students/${id}`,
    //     method: "GET",
    //   }),
    // }),
    addAdmin: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
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
} = UserManagementApi;
