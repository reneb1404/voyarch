import { forwardRef, SelectHTMLAttributes, useId } from "react";

type SelectVariant =
	| "primary"
	| "secondary"
	| "accent"
	| "neutral"
	| "info"
	| "success"
	| "warning"
	| "ghost";

type SelectOption = {
	text: string;
};

interface SelectProps extends Omit<
	SelectHTMLAttributes<HTMLSelectElement>,
	"type"
> {
	label?: string;
	options: SelectOption[];
	variant?: SelectVariant;
	error?: string;
}

const variantClassMap: Record<SelectVariant, string> = {
	primary: "select-primary",
	secondary: "select-secondary",
	accent: "select-accent",
	neutral: "select-neutral",
	info: "select-info",
	success: "select-success",
	warning: "select-warning",
	ghost: "select-ghost",
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	(
		{ label, options, variant = "primary", error, className, id, ...rest },
		ref,
	) => {
		const selectId = id ?? useId();
		const errorId = `${selectId}-error`;
		const classes = [
			"select",
			variantClassMap[variant],
			error ? "select-error" : "",
			className,
		]
			.filter(Boolean)
			.join(" ");

		return (
			<div className="w-full mb-3">
				{label && (
					<label htmlFor={selectId} className="label pb-1">
						{label}
					</label>
				)}

				<label htmlFor={selectId} className={`${classes} w-full`}>
					<select
						id={selectId}
						ref={ref}
						className={classes}
						aria-invalid={!!error}
						aria-describedby={error ? errorId : undefined}
						{...rest}
					>
						{options.map((option) => (
							<option key={option.text}>{option.text}</option>
						))}
					</select>
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
