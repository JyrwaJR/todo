import { passwordRegex } from "@src/libs/constant";
import { z } from "zod";

export const LoginModel = z.object({
  email: z
    .string({
      invalid_type_error: "Please enter a valid email",
      required_error: "Please enter an email",
    })
    .email({
      message: "Please enter a valid email",
    })
    .trim()
    .toLowerCase(),
  password: z
    .string({
      invalid_type_error: "Please enter a valid password",
      description: "Password",
      required_error: "Please enter a password",
    })
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(passwordRegex, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
    }),
});

export type LoginModelType = z.infer<typeof LoginModel>;
