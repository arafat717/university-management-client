import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TSideBarItems =
  | {
      key: string | undefined;
      label: ReactNode;
      children?: TSideBarItems[];
    }
  | undefined;
