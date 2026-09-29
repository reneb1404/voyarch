import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { CreateTripInput } from "@/drizzle/validation/trip";
import { useFormContext, useWatch } from "react-hook-form";

function getDurationLabel(start?: string | null, end?: string | null) {
	if (!start || !end) return "";
	const s = new Date(`${start}T00:00:00`);
	const e = new Date(`${end}T00:00:00`);
	const days = Math.round((e.getTime() - s.getTime()) / 86_400_000) + 1;
	if (Number.isNaN(days) || days < 1) return "";
	return days === 1 ? "1 day" : `${days} days`;
}

export function CreateTripBasicSection() {
	const {
		register,
		formState: { errors },
	} = useFormContext<CreateTripInput>();

	const [startDate, endDate] = useWatch({
		name: ["startDate", "endDate"],
	});

	return (
		<Card title="Basic Information">
			<p className="text-sm text-base-content/60">
				Let&apos;s start with the essentials.
			</p>
			<div className="mt-2 grid grid-cols-1 gap-x-4 sm:grid-cols-4">
				<Input
					label="Trip title"
					placeholder="e.g. Summer in Japan"
					className="sm:col-span-2"
					error={errors.title?.message}
					{...register("title")}
				/>
				<Input
					label="Destination"
					placeholder="Country, city or region"
					className="sm:col-span-2"
					error={errors.destination?.message}
					{...register("destination")}
				/>
				<Input
					label="Start date"
					type="date"
					error={errors.startDate?.message}
					{...register("startDate")}
				/>
				<Input
					label="End date"
					type="date"
					min={startDate || undefined}
					error={errors.endDate?.message}
					{...register("endDate")}
				/>
				<Input
					label="Duration"
					disabled
					value={getDurationLabel(startDate, endDate)}
					placeholder="–"
				/>
				<Input
					label="Trip type"
					placeholder="e.g. Vacation"
					error={errors.tripType?.message}
					{...register("tripType")}
				/>
			</div>
		</Card>
	);
}
