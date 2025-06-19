import {
  TAcademicDepartment,
  TAcademicFaculty,
  TAcademicSemester,
} from "./AcademicManagement";

export interface TStudent {
  [x: string]: any;
  _id: string;
  user: string;
  name: Name;
  id: string;
  email: string;
  dateOfBirth: string;
  bloodGroup: string;
  contactNo: string;
  emergencyContactNo: string;
  gender: string;
  presentAddress: string;
  fullName: string;
  admissionSemester: TAcademicSemester;
  profileImage: string;
  isDeleted: boolean;
  academicDepartment: TAcademicDepartment;
  academicFaculty: TAcademicFaculty;
  permanentAddress: string;
  gurdian: Gurdian;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Name {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
}

export interface Gurdian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  _id: string;
}
