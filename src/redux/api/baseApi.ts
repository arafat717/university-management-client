// Need to use the React-specific entry point to import createApi

import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";
import { logout, setUser } from "../features/auth/authSlice";
import {
  BaseQueryApi,
  DefinitionType,
  FetchArgs,
} from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const res = await fetch(`http://localhost:5000/api/v1/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    if (data?.data?.accesstoken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(
        setUser({
          user,
          token: data?.data?.accesstoken,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
