import { Trip } from "@/drizzle/validation/trip";

export type TripCardData = Pick<
	Trip,
	| "id"
	| "title"
	| "coverImageUrl"
	| "status"
	| "tripType"
	| "startDate"
	| "endDate"
	| "destination"
>;

export interface TripCardProps {
	trip: TripCardData;
	className?: string;
}
