import { z } from "zod/v4";

export const loginSchema = z.object({
    email: z.email("Email must be valid"),
    password: z
        .string()
        .regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
            "Password isn't not strong enough"
        ),
});
const userSchema = loginSchema.extend({
    Name: z
        .string()
        .min(3, "Full name must have at least 3 letters")
        .max(70, "Full name must have at most 35 letters"),
});

export const fullUserSchema = userSchema.extend({
    enabled: z.boolean().optional(),
    role: z.enum(["Admin", "User"]),
});

export default userSchema;
