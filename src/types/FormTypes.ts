import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password is too short")
    .max(20, "Password is too long")
});

export type FormSchema = z.infer<typeof formSchema>;
