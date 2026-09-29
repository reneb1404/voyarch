import { type ChangeEvent, type ComponentProps, useId } from "react";

export interface SelectOption<T extends string = string> {
	label: string;
	value: T;
	disabled?: boolean;
}

interface SelectProps<T extends string = string> extends Omit<
	ComponentProps<"select">,
	"value" | "defaultValue"
> {
	options: readonly SelectOption<T>[];
	value?: T;
	defaultValue?: T;
	label?: string;
	error?: string;
	/** Typed shortcut: receives the value as T, no cast needed at the call site */
	onValueChange?: (value: T) => void;
	/** Keeps the label for screen readers only (e.g. inside filter bars) */
	hideLabel?: boolean;
	/** Renders an empty label-height spacer so selects align with labelled inputs */
	reserveLabelSpace?: boolean;
	wrapperClassName?: string;
}

export function Select<T extends string = string>({
	options,
	label,
	error,
	onValueChange,
	onChange,
	hideLabel = false,
	reserveLabelSpace = false,
	wrapperClassName,
	className,
	id,
	...rest
}: SelectProps<T>) {
	const generatedId = useId();
	const selectId = id ?? generatedId;
	const errorId = `${selectId}-error`;

	function handleChange(e: ChangeEvent<HTMLSelectElement>) {
		onChange?.(e);
		onValueChange?.(e.target.value as T);
	}

	return (
		<div className={`w-full ${wrapperClassName ?? ""}`}>
			{label ? (
				<label
					htmlFor={selectId}
					className={hideLabel ? "sr-only" : "label mb-1"}
				>
					{label}
				</label>
			) : reserveLabelSpace ? (
				<div className="label mb-1 h-5.5" aria-hidden="true" />
			) : null}

			<select
				id={selectId}
				aria-invalid={!!error}
				aria-describedby={error ? errorId : undefined}
				className={`select w-full ${error ? "select-error" : ""} ${className ?? ""}`}
				onChange={handleChange}
				{...rest}
			>
				{options.map((opt) => (
					<option key={opt.value} value={opt.value} disabled={opt.disabled}>
						{opt.label}
					</option>
				))}
			</select>

			{error && (
				<span
					id={errorId}
					role="alert"
					className="mt-1 block text-xs text-error"
				>
					{error}
				</span>
			)}
		</div>
	);
}
