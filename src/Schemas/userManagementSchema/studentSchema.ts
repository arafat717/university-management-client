import { z } from "zod";

// Guardian Schema
const GuardianSchema = z.object({
  fatherName: z.string({
    required_error: "Father's name is required",
  }),
  fatherOccupation: z.string({
    required_error: "Father's occupation is required",
  }),
  fatherContactNo: z.string({
    required_error: "Father's contact number is required",
  }),
  motherName: z.string({
    required_error: "Mother's name is required",
  }),
  motherOccupation: z.string({
    required_error: "Mother's occupation is required",
  }),
  motherContactNo: z.string({
    required_error: "Mother's contact number is required",
  }),
});

// User name schema
const userNameSchema = z.object({
  firstName: z.string({
    required_error: "First Name Is Required",
  }),
  middleName: z.string().optional(),
  lastName: z.string({
    required_error: "Last Name Is Required",
  }),
});

// Main student schema
export const StudentValidationSchema = z.object({
  name: userNameSchema,
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  dateOfBirth: z.string({
    required_error: "Date of birth is required",
  }),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
    required_error: "Blood Group is required",
  }),
  contactNo: z.string({
    required_error: "Contact number is required",
  }),
  emergencyContactNo: z.string({
    required_error: "Emergency contact number is required",
  }),
  gender: z.enum(["male", "female"], {
    required_error: "Gender is required",
  }),
  presentAddress: z.string({
    required_error: "Present address is required",
  }),
  permanentAddress: z.string({
    required_error: "Permanent address is required",
  }),
  admissionSemester: z.string({
    required_error: "Admission Semester is required",
  }),
  academicDepartment: z.string({
    required_error: "Academic Department is required",
  }),
  gurdian: GuardianSchema,
});
