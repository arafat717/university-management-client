import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  [x: string]: any;
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQeryParams = {
  name: string;
  value: boolean | React.Key;
};
