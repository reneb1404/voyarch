import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { CreateTripInput } from "@/drizzle/validation/trip";
import { useId } from "react";
import { useFormContext } from "react-hook-form";

export function CreateTripAdditionalSection() {
	const {
		register,
		formState: { errors },
	} = useFormContext<CreateTripInput>();

	const descriptionId = useId();
	const descriptionErrorId = `${descriptionId}-error`;

	return (
		<Card title="Additional details">
			<p className="text-sm text-base-content/60">
				Add more information to personalize your trip.
			</p>

			<div className="mt-2 grid grid-cols-1 gap-x-4 sm:grid-cols-3">
				<div className="flex flex-col sm:col-span-3">
					<label htmlFor={descriptionId} className="label">
						Description
					</label>
					<textarea
						id={descriptionId}
						className={`textarea h-24 w-full ${errors.description ? "textarea-error" : ""}`}
						placeholder="What are you looking forward to?"
						{...register("description")}
					/>
					<span
						id={descriptionErrorId}
						className="label-text-alt text-error mt-1 block min-h-5"
					>
						{errors.description?.message ?? ""}
					</span>
				</div>

				<Input
					label="Currency"
					placeholder="EUR"
					maxLength={3}
					labelClassName="uppercase"
					error={errors.budgetCurrency?.message}
					{...register("budgetCurrency")}
				/>
				<Input
					label="Budget"
					type="number"
					min={0}
					step="0.01"
					inputMode="decimal"
					placeholder="0.00"
					error={errors.budgetAmount?.message}
					{...register("budgetAmount", {
						setValueAs: (value) => (value === "" ? null : Number(value)),
					})}
				/>
				<Input
					label="Status"
					readOnly
					labelClassName="capitalize"
					{...register("status")}
				/>
			</div>
		</Card>
	);
}
