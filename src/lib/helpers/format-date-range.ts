const formatter = new Intl.DateTimeFormat("de-DE", {
	day: "numeric",
	month: "short",
	year: "numeric",
});

function toDate(value: string | Date | null | undefined): Date | null {
	if (!value) return null;
	if (value instanceof Date) return value;
	const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value);
	return match
		? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
		: new Date(value);
}

export function formatDateRange(
	start: string | Date | null | undefined,
	end: string | Date | null | undefined,
): string | null {
	const s = toDate(start);
	const e = toDate(end);
	if (s && e) return `${formatter.format(s)} – ${formatter.format(e)}`;
	if (s) return `From ${formatter.format(s)}`;
	if (e) return `Until ${formatter.format(e)}`;
	return null;
}
