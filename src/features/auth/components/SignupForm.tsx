"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signUp } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpInput, signUpSchema } from "../schema";

export function SignupForm() {
	const router = useRouter();
	const [serverError, setServerError] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignUpInput>({
		resolver: zodResolver(signUpSchema),
	});

	async function onSubmit(input: SignUpInput) {
		setServerError(null);
		const { error } = await signUp.email({
			name: input.name,
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
				label="Name"
				type="text"
				error={errors.name?.message}
				placeholder="John Doe"
				className="rounded-md"
				{...register("name")}
			/>

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

			<Input
				label="Confirm password"
				type="password"
				error={errors.confirmPassword?.message}
				placeholder="************"
				className="rounded-md"
				{...register("confirmPassword")}
			/>
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
				Sign up
			</Button>
			<p className="text-center text-sm text-base-content/70 mt-6">
				Already have an account?{" "}
				<Link
					href="/login"
					className="link link-primary font-medium no-underline hover:underline"
				>
					Log in.
				</Link>
			</p>
		</form>
	);
}
