import { TAcademicSemester } from "../../../types/AcademicSemester";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const AcademicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semester",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        console.log(response);
        return {
          data: response.data,
          meta: response.data,
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
  }),
});

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation } =
  AcademicManagementApi;
