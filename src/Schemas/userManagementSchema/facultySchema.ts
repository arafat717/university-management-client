import { z } from "zod";

const createUserNameValidationSchema = z.object({
  firstName: z
    .string({
      required_error: "First Name is required",
    })
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: "First Name must start with a capital letter",
    }),
  middleName: z.string().optional(),
  lastName: z.string({
    required_error: "Last Name is required",
  }),
});

export const FacultyValidationSchema = z.object({
  designation: z.string({
    required_error: "Designation is required",
  }),
  name: createUserNameValidationSchema,
  gender: z.enum(["male", "female"], {
    required_error: "Gender is required",
  }),
  dateOfBirth: z.string({
    required_error: "Birth date is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  contactNo: z.string({
    required_error: "Contact number is required",
  }),
  emergencyContactNo: z.string({
    required_error: "Emergency Contact number is required",
  }),
  bloogGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
    required_error: "Blood Group is required",
  }),
  presentAddress: z.string({
    required_error: "Present Address is required",
  }),
  permanentAddress: z.string({
    required_error: "PermanentAddress is required",
  }),
  academicDepartment: z.string({
    required_error: "academic Department is required",
  }),
});
