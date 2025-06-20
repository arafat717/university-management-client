import { z } from "zod";

const createUserNameValidationSchema = z.object({
  firstName: z
    .string({
      required_error: "First Name is required",
    })
    .min(1)
    .max(20),
  middleName: z.string().max(20).optional(),
  lastName: z
    .string({
      required_error: "Last Name is required",
    })
    .max(20),
});

export const AdminValidationSchema = z.object({
  designation: z.string({
    required_error: "Designation is required",
  }),
  name: createUserNameValidationSchema,
  gender: z.enum(["male", "female"], {
    required_error: "Gender is required",
  }),
  dateOfBirth: z.string({
    required_error: "Birth Date is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  contactNo: z.string({
    required_error: "Contact Number is required",
  }),
  emergencyContactNo: z.string({
    required_error: "Emergency Contact No is required",
  }),
  bloogGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
    required_error: "Blood Group is required",
  }),
  presentAddress: z.string({
    required_error: "Present Address is required",
  }),
  permanentAddress: z.string({
    required_error: "Permanent Address is required",
  }),
});
