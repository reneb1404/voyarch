import { tripQueries } from "@/drizzle/queries/trip";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { parseTripFilters } from "../filters";
import { TripOverviewHeader } from "./header";
import { TripCard } from "./trip-card";
import { TripSearchFilter } from "./trip-search-filter";

interface TripOverViewProps {
	searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function TripOverview({ searchParams }: TripOverViewProps) {
	const session = await auth.api.getSession({ headers: await headers() });

	if (!session) redirect("/login");

	const filters = parseTripFilters(await searchParams);
	const trips = await tripQueries.getByUser(session.user.id);

	const statusCounts = {
		all: trips.length,
		draft: trips.filter((t) => t.status === "draft").length,
		planned: trips.filter((t) => t.status === "planned").length,
		ongoing: trips.filter((t) => t.status === "ongoing").length,
		completed: trips.filter((t) => t.status === "completed").length,
	};

	return (
		<div className="flex flex-col gap-4">
			<TripOverviewHeader />
			<TripSearchFilter filters={filters} statusCounts={statusCounts} />

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{trips.map((trip) => (
					<TripCard key={trip.id} trip={trip} />
				))}
			</div>
		</div>
	);
}
