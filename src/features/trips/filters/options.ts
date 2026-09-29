import { TRIP_STATUSES, TRIP_TYPES } from "@/drizzle/constants";

export const SORT_OPTIONS = [
	{ label: "Newest", value: "newest" },
	{ label: "Oldest", value: "oldest" },
	{ label: "Start date", value: "startDate" },
	{ label: "End date", value: "endDate" },
	{ label: "A-Z", value: "a-z" },
] as const;

export const DATE_OPTIONS = [
	{ label: "Any date", value: "any-date" },
	{ label: "Upcoming", value: "upcoming" },
	{ label: "Past", value: "past" },
	{ label: "This year", value: "this-year" },
] as const;

export type TripTypeValue = (typeof TRIP_TYPES)[number];
export type TripStatusValue = (typeof TRIP_STATUSES)[number];

export const TYPE_LABELS: Record<TripTypeValue, string> = {
	vacation: "Vacation",
	"road-trip": "Road trip",
	backpacking: "Backpacking",
	business: "Business",
};

export const STATUS_LABELS: Record<TripStatusValue, string> = {
	draft: "Draft",
	planned: "Planned",
	ongoing: "Ongoing",
	completed: "Completed",
	cancelled: "Cancelled",
	archived: "Archived",
};

export type TripTypeFilter = "all-types" | TripTypeValue;
export type TripStatusFilter = "all" | TripStatusValue;

export const TYPE_OPTIONS: readonly {
	label: string;
	value: TripTypeFilter;
}[] = [
	{ label: "All types", value: "all-types" },
	...TRIP_TYPES.map((value) => ({ label: TYPE_LABELS[value], value })),
];

export const STATUS_OPTIONS: readonly {
	label: string;
	value: TripStatusFilter;
}[] = [
	{ label: "All", value: "all" },
	...TRIP_STATUSES.map((value) => ({ label: STATUS_LABELS[value], value })),
];

export type TripSort = (typeof SORT_OPTIONS)[number]["value"];
export type TripDate = (typeof DATE_OPTIONS)[number]["value"];
