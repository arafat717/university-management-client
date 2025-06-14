import { baseApi } from "../../api/baseApi";

const AcademicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semester",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery } = AcademicSemesterApi;
