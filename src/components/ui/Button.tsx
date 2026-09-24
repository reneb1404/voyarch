import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant =
	| "primary"
	| "secondary"
	| "accent"
	| "neutral"
	| "info"
	| "success"
	| "warning"
	| "error"
	| "ghost"
	| "link";

type ButtonAppearance = "solid" | "outline" | "dash" | "soft";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	appearance?: ButtonAppearance;
	size?: ButtonSize;
	loading?: boolean;
}

const variantClassMap: Record<ButtonVariant, string> = {
	primary: "btn-primary",
	secondary: "btn-secondary",
	accent: "btn-accent",
	neutral: "btn-neutral",
	info: "btn-info",
	success: "btn-success",
	warning: "btn-warning",
	error: "btn-error",
	ghost: "btn-ghost",
	link: "btn-link",
};

const appearanceClassMap: Record<ButtonAppearance, string> = {
	solid: "",
	outline: "btn-outline",
	dash: "btn-dash",
	soft: "btn-soft",
};

const sizeClassMap: Record<ButtonSize, string> = {
	xs: "btn-xs",
	sm: "btn-sm",
	md: "btn-md",
	lg: "btn-lg",
	xl: "btn-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = "primary",
			appearance = "solid",
			size = "md",
			loading = false,
			disabled,
			className,
			children,
			...rest
		},
		ref,
	) => {
		const classes = [
			"btn",
			variantClassMap[variant],
			appearanceClassMap[appearance],
			sizeClassMap[size],
			className,
		]
			.filter(Boolean)
			.join(" ");

		return (
			<button
				ref={ref}
				className={classes}
				disabled={disabled || loading}
				aria-busy={loading}
				{...rest}
			>
				{loading && (
					<span className="loading loading-spinner" aria-hidden="true" />
				)}
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";
