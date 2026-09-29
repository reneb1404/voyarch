import { formatDateRange } from "@/lib/helpers/format-date-range";
import Image from "next/image";
import Link from "next/link";
import { STATUS_LABELS, TYPE_LABELS, type TripStatusValue } from "../filters";
import type { TripCardProps } from "../types";
import { TripCardMenu } from "./trip-card-menu";

const STATUS_BADGE: Record<TripStatusValue, string> = {
	draft: "badge-warning",
	planned: "badge-info",
	ongoing: "badge-success",
	completed: "badge-neutral",
	cancelled: "badge-error",
	archived: "badge-ghost",
};

export function TripCard({ trip, className }: TripCardProps) {
	const dates = formatDateRange(trip.startDate, trip.endDate);
	const inactive = trip.status === "cancelled" || trip.status === "archived";

	return (
		<article
			className={`group card relative bg-base-100 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${className ?? ""}`}
		>
			<div className="relative aspect-16/10 overflow-hidden rounded-t-box bg-base-300">
				{trip.coverImageUrl ? (
					<Image
						src={trip.coverImageUrl}
						alt=""
						fill
						sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
						className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
							inactive ? "grayscale" : ""
						}`}
					/>
				) : (
					<div className="flex h-full items-center justify-center bg-linear-to-br from-base-300 to-base-200 text-base-content/30"></div>
				)}

				<span
					className={`badge badge-soft badge-md absolute bottom-3 left-3 font-medium shadow-sm ${STATUS_BADGE[trip.status]}`}
				>
					{STATUS_LABELS[trip.status]}
				</span>
			</div>

			<TripCardMenu
				tripId={trip.id}
				tripTitle={trip.title}
				className="absolute top-3 right-3 z-20"
			/>
			<div className="card-body gap-1 p-5">
				<h2 className="card-title text-lg leading-snug">
					<Link
						href={`/trips/${trip.id}`}
						className="line-clamp-1 after:absolute after:inset-0"
					>
						{trip.title}
					</Link>
				</h2>

				<p className="text-sm text-base-content/60">
					{dates ?? <span className="italic">No dates yet</span>}
				</p>

				<div className="mt-4 flex items-center justify-between gap-2">
					{trip.destination && (
						<p className="flex min-w-0 items-center gap-1.5 text-sm text-base-content/70">
							<span className="truncate">{trip.destination}</span>
						</p>
					)}
					{trip.tripType && (
						<span className="badge badge-ghost ml-auto shrink-0">
							{TYPE_LABELS[trip.tripType]}
						</span>
					)}
				</div>
			</div>
		</article>
	);
}
