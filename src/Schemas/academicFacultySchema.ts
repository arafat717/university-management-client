import { z } from "zod";

export const academicFacultySchema = z.object({
  name: z.string({ required_error: "Name is required!" }),
});
