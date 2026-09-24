import { forwardRef, InputHTMLAttributes, useId } from "react";

interface InputProps extends Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"type"
> {
	label?: string;
	type?: "text" | "email" | "password" | "checkbox" | "date" | "number";
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, type = "text", error, className, id, ...rest }, ref) => {
		const inputId = id ?? useId();
		const errorId = `${inputId}-error`;

		return (
			<div className="w-full mb-3">
				{label && (
					<label htmlFor={inputId} className="label">
						{label}
					</label>
				)}

				<label
					htmlFor={inputId}
					className={`input w-full ${error ? "input-error" : ""} ${className ?? ""}`}
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

				<span
					id={errorId}
					className="label-text-alt text-error mt-1 block min-h-5"
				>
					{error ?? ""}
				</span>
			</div>
		);
	},
);

Input.displayName = "Input";
