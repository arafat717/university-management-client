import {
  TCourse,
  TSemesterRegistration,
} from "../../../types/CourseManagement";
import { TQeryParams, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const CourseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesterRegistration: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQeryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/registration",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (
        response: TResponseRedux<TSemesterRegistration[]>
      ) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["semester"],
    }),
    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQeryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["course"],
    }),
    addSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "/registration/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semester"],
    }),
    addCourse: builder.mutation({
      query: (data) => ({
        url: "/courses/create-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["course"],
    }),
    updateSemesterRegistrationStatus: builder.mutation({
      query: (args) => ({
        url: `/registration/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["semester"],
    }),
    addFaculties: builder.mutation({
      query: (args) => ({
        url: `/courses/${args.id}/assign-faculties`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["semester"],
    }),
  }),
});

export const {
  useAddSemesterRegistrationMutation,
  useGetAllSemesterRegistrationQuery,
  useUpdateSemesterRegistrationStatusMutation,
  useGetAllCoursesQuery,
  useAddCourseMutation,
  useAddFacultiesMutation,
} = CourseManagementApi;
