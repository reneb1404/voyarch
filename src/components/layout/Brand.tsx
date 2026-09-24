import Link from "next/link";

export function Brand() {
	return (
		<div className="flex items-center gap-2 text-lg font-bold shadow-md h-16 p-4">
			<Link href="/dashboard">Voyarch</Link>
		</div>
	);
}
