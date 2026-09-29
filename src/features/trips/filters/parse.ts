import {
	DATE_OPTIONS,
	SORT_OPTIONS,
	STATUS_OPTIONS,
	TripStatusFilter,
	TripTypeFilter,
	TYPE_OPTIONS,
	type TripDate,
	type TripSort,
} from "./options";

export interface TripFilters {
	search: string;
	sort: TripSort;
	type: TripTypeFilter;
	date: TripDate;
	status: TripStatusFilter;
}

export const DEFAULT_TRIP_FILTERS: TripFilters = {
	search: "",
	sort: "newest",
	type: "all-types",
	date: "any-date",
	status: "all",
};

type RawParam = string | string[] | undefined;
export type RawSearchParams = Record<string, RawParam>;

const first = (v: RawParam) => (Array.isArray(v) ? v[0] : v);

/** Returns the raw value only if it is one of the known options, else the fallback */
function pick<T extends string>(
	options: readonly { value: T }[],
	raw: RawParam,
	fallback: T,
): T {
	const v = first(raw);
	return options.find((o) => o.value === v)?.value ?? fallback;
}

/** Validates untrusted URL params against the known option values */
export function parseTripFilters(params: RawSearchParams): TripFilters {
	return {
		search: first(params.search)?.trim() ?? "",
		sort: pick(SORT_OPTIONS, params.sort, DEFAULT_TRIP_FILTERS.sort),
		type: pick(TYPE_OPTIONS, params.type, DEFAULT_TRIP_FILTERS.type),
		date: pick(DATE_OPTIONS, params.date, DEFAULT_TRIP_FILTERS.date),
		status: pick(STATUS_OPTIONS, params.status, DEFAULT_TRIP_FILTERS.status),
	};
}
