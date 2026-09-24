"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signIn } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "next/dist/build/output/log";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginInput, loginSchema } from "../schema";

export function LoginForm() {
	const router = useRouter();
	const [serverError, setServerError] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginInput>({
		resolver: zodResolver(loginSchema),
	});

	async function onSubmit(input: LoginInput) {
		setServerError(null);
		const { error } = await signIn.email({
			email: input.email,
			password: input.password,
		});

		if (error) {
			setServerError(error.message ?? "Failed to login");
			return;
		}

		router.push("/home");
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Input
				label="Email"
				type="email"
				error={errors.email?.message}
				placeholder="John.Doe@example.com"
				className="rounded-md"
				{...register("email")}
			/>
			<Input
				label="Password"
				type="password"
				error={errors.password?.message}
				placeholder="************"
				className="rounded-md"
				{...register("password")}
			/>

			<div className="flex justify-end mt-1">
				<Link
					href="/forgot-password"
					className="link link-primary text-xs font-medium no-underline hover:underline"
				>
					Forgot password?
				</Link>
			</div>

			{serverError && (
				<p role="alert" className="text-error text-sm mt-2">
					{serverError}
				</p>
			)}

			<Button
				type="submit"
				className="w-full mt-4 rounded-md"
				loading={isSubmitting}
			>
				Login
			</Button>
			<p className="text-center text-sm text-base-content/70 mt-6">
				Don't have an account yet?{" "}
				<Link
					href="/signup"
					className="link link-primary font-medium no-underline hover:underline"
				>
					Sign up.
				</Link>
			</p>
		</form>
	);
}
