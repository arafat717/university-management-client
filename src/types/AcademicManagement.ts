export interface TAcademicSemester {
  _id: string;
  name: string;
  code: string;
  year: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TAcademicFaculty {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TAcademicDepartment {
  _id: string;
  name: string;
  academicFaculty: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
