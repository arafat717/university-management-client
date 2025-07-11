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

export interface TFacylty {
  [x: string]: any;
  _id: string;
  id: string;
  user: string;
  designation: string;
  name: Name;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup: string;
  presentAddress: string;
  permanentAddress: string;
  profileImage: string;
  academicDepartment: TAcademicDepartment;
  academicFaculty: string;
  isDeleted: boolean;
  __v: number;
  fullName: string;
}

export interface TAdmin {
  [x: string]: any;
  _id: string;
  id: string;
  user: string;
  designation: string;
  name: Name;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup: string;
  presentAddress: string;
  permanentAddress: string;
  profileImage: string;
  isDeleted: boolean;
  __v: number;
  fullName: string;
}
