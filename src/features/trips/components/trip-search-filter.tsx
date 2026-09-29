"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import {
	DATE_OPTIONS,
	DEFAULT_TRIP_FILTERS,
	SORT_OPTIONS,
	STATUS_OPTIONS,
	TYPE_OPTIONS,
	TripFilters,
	TripStatus,
} from "../filters";

interface TripSearchFilterProps {
	filters: TripFilters;
	statusCounts?: Partial<Record<TripStatus, number>>;
}

export function TripSearchFilter({
	filters,
	statusCounts,
}: TripSearchFilterProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isPending, startTransition] = useTransition();

	function update(patch: Partial<TripFilters>) {
		const params = new URLSearchParams(searchParams.toString());
		for (const [key, value] of Object.entries(patch)) {
			if (value === DEFAULT_TRIP_FILTERS[key as keyof TripFilters]) {
				params.delete(key);
			} else {
				params.set(key, value);
			}
		}
		const qs = params.toString();
		startTransition(() => {
			router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
		});
	}

	const [searchInput, setSearchInput] = useState(filters.search);

	useEffect(() => {
		if (searchInput === filters.search) return;
		const t = setTimeout(() => update({ search: searchInput }), 300);
		return () => clearTimeout(t);
	}, [searchInput]);

	return (
		<div className="flex flex-col gap-4 rounded-box bg-base-100 p-4">
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_14rem] sm:items-end">
				<Input
					type="search"
					variant="neutral"
					className="mb-0!"
					reserveErrorSpace={false}
					aria-label="Search trips"
					value={filters.search}
					onChange={(e) => setSearchInput(e.target.value)}
					placeholder="Search trips by title, destination or keyword..."
				/>
				<Select
					label="Sort by"
					options={SORT_OPTIONS}
					value={filters.sort}
					onValueChange={(sort) => update({ sort })}
				/>
			</div>

			<div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
				<div
					role="group"
					aria-label="Filter by status"
					className="flex flex-wrap gap-2"
				>
					{STATUS_OPTIONS.map(({ label, value }) => {
						const active = filters.status === value;
						const count = statusCounts?.[value];

						return (
							<Button
								key={value}
								size="sm"
								variant={active ? "primary" : "ghost"}
								className={`rounded-full ${active ? "" : "bg-base-100"}`}
								aria-pressed={active}
								onClick={() => update({ status: value })}
							>
								{label}
								{count !== undefined && (
									<span
										className={`badge badge-xs border-0 ${
											active
												? "bg-primary-content/20 text-primary-content"
												: "badge-neutral badge-soft"
										}`}
									>
										{count}
									</span>
								)}
							</Button>
						);
					})}
				</div>

				<div className="grid grid-cols-2 gap-3 lg:w-96">
					<Select
						label="Type"
						options={TYPE_OPTIONS}
						value={filters.type}
						onValueChange={(type) => update({ type })}
					/>
					<Select
						label="Date"
						options={DATE_OPTIONS}
						value={filters.date}
						onValueChange={(date) => update({ date })}
					/>
				</div>
			</div>
		</div>
	);
}
