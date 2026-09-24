//TODO get overview from db

import Link from "next/link";
import { TripCard } from "./TripCard";

const mockData = [
	{
		key: 1,
		title: "Italy - Dolce Vita",
		date: "12. - 21. June 2025",
		cityStops: 3,
		days: "9",
		travelers: 1,
	},
	{
		key: 2,
		title: "Japan",
		date: "03. - 17. October 2025",
		cityStops: 4,
		days: "14",
		travelers: 1,
	},
	{
		key: 3,
		title: "Norway - Roadtrip",
		date: "No fixed dates yet",
		cityStops: 6,
		days: "flexible",
		travelers: 1,
	},
];

export async function DashboardOverview() {
	return (
		<div className="py-4 col-span-4">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-semibold">Your trips</h1>
				<Link href={"#"} className="text-sm text-blue-700">
					View all
				</Link>
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-4">
				{mockData.map((trip) => {
					return (
						<TripCard
							key={trip.key}
							destination={trip.title}
							dateRange={trip.date}
							days={trip.days}
							travelers={trip.travelers}
							cityStops={trip.cityStops}
							progressPercent={50}
						/>
					);
				})}
			</div>
		</div>
	);
}
