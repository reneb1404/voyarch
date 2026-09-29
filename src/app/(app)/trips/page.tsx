import { TripOverview } from "@/features/trips/components";
import { RawSearchParams } from "@/features/trips/filters";

interface TripsPageProps {
	searchParams: Promise<RawSearchParams>;
}

export default function TripsPage({ searchParams }: TripsPageProps) {
	return <TripOverview searchParams={searchParams} />;
}
