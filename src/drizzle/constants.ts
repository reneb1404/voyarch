// drizzle/constants.ts (no imports from React or the schema)
export const TRIP_TYPES = [
	"vacation",
	"road-trip",
	"backpacking",
	"business",
] as const;
export const TRIP_STATUSES = [
	"draft",
	"planned",
	"ongoing",
	"completed",
	"cancelled",
	"archived",
] as const;
