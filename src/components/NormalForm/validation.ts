import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(8, "Password is too Short"),
});

export type TNormalForm = z.infer<typeof SignUpSchema>;
