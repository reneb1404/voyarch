import { forwardRef, InputHTMLAttributes, useId } from "react";

type InputVariant =
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

interface InputProps extends Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"type"
> {
	label?: string;
	variant?: InputVariant;
	labelClassName?: string;
	type?:
		| "text"
		| "email"
		| "password"
		| "checkbox"
		| "date"
		| "number"
		| "search";
	error?: string;
	reserveErrorSpace?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			variant = "primary",
			labelClassName,
			type = "text",
			reserveErrorSpace = true,
			error,
			className,
			id,
			...rest
		},
		ref,
	) => {
		const inputId = id ?? useId();
		const errorId = `${inputId}-error`;

		return (
			<div className={`w-full mb-3 ${className ?? ""}`}>
				{label && (
					<label htmlFor={inputId} className="label">
						{label}
					</label>
				)}

				<label
					htmlFor={inputId}
					className={`input w-full ${error ? "input-error" : `input-${variant}`} ${labelClassName ?? ""}`}
				>
					<input
						id={inputId}
						ref={ref}
						type={type}
						aria-invalid={!!error}
						aria-describedby={error ? errorId : undefined}
						className="grow text-base"
						{...rest}
					/>
				</label>

				{(error || reserveErrorSpace) && (
					<span
						id={errorId}
						className="label-text-alt text-error mt-1 block min-h-5"
					>
						{error ?? ""}
					</span>
				)}
			</div>
		);
	},
);

Input.displayName = "Input";
