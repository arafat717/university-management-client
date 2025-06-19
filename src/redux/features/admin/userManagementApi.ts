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
    // getAllStudent: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();
    //     if (args) {
    //       args.forEach((item: TQeryParams) =>
    //         params.append(item.name, item.value as string)
    //       );
    //     }
    //     return {
    //       url: "/academic-department",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),
  }),
});

export const {
  useAddStudentMutation,
  //   useGetAllStudentQuery,
} = UserManagementApi;
