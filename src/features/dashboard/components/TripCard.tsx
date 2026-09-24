import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface TripCardProps {
	destination: string;
	dateRange: string;
	cityStops: number;
	days: string;
	travelers: number;
	progressPercent: number;
	className?: string;
}

export function TripCard({
	destination,
	dateRange,
	cityStops,
	days,
	travelers,
	progressPercent,
	className,
}: TripCardProps) {
	const clampedProgress = Math.min(100, Math.max(0, progressPercent));

	return (
		<div
			className={`card bg-base-100 h-96 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden group ${className ?? ""}`}
		>
			<div className="card-body p-4 gap-2.5">
				<h2 className="card-title text-base font-semibold">{destination}</h2>

				<p className="text-sm text-base-content/60">{dateRange}</p>

				<div className="flex justify-around">
					<p className="text-sm text-base-content/60">{`${cityStops} Cities`}</p>
					<p className="text-sm text-base-content/60">{`${days} Days`}</p>
					<p className="text-sm text-base-content/60">{`${travelers} travelers`}</p>
				</div>

				<div className="h-2 w-full rounded-full bg-base-200 overflow-hidden mt-1">
					<div
						className={`h-full rounded-full transition-all duration-500`}
						style={{ width: `${clampedProgress}%` }}
					/>
				</div>

				<p className={`text-sm font-medium`}>{clampedProgress}% planned</p>

				<Link href={"#"}>
					<Button className="w-full">Open trip</Button>
				</Link>
			</div>
		</div>
	);
}
