import { z } from "zod";

export const loginSchema = z.object({
	email: z.email(),
	password: z.string().min(12, "Password too short (min 12 characters)"),
});

export const signUpSchema = loginSchema
	.extend({
		name: z.string().min(2, "Name too short (min 2 characters)"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		error: "Passwords do not match",
		path: ["confirmPassword"],
	});

export const forgotPasswordSchema = z.object({
	email: z.email(),
});

export const resetPasswordSchema = z
	.object({
		newPassword: z.string().min(12, "At least 12 characters"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
