"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface TripCardMenuProps {
	tripId: string;
	tripTitle: string;
	className?: string;
}

export function TripCardMenu({
	tripId,
	tripTitle,
	className,
}: TripCardMenuProps) {
	const ref = useRef<HTMLDetailsElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const onPointerDown = (e: PointerEvent) => {
			if (!el.contains(e.target as Node)) el.open = false;
		};
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") el.open = false;
		};

		document.addEventListener("pointerdown", onPointerDown);
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("pointerdown", onPointerDown);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, []);

	const close = () => {
		if (ref.current) ref.current.open = false;
	};

	return (
		<details ref={ref} className={`dropdown dropdown-end ${className ?? ""}`}>
			<summary
				aria-label={`Actions for ${tripTitle}`}
				className="btn btn-square btn-sm border-0 bg-black/40 text-white backdrop-blur-sm hover:bg-black/60"
			></summary>

			<ul className="dropdown-content menu z-20 mt-2 w-44 rounded-box bg-base-100 p-2 shadow-lg ring-1 ring-base-300">
				<li>
					<Link href={`/trips/${tripId}/edit`} onClick={close}>
						Edit
					</Link>
				</li>
				<li>
					<button type="button" onClick={close /* TODO: archive action */}>
						Archive
					</button>
				</li>
				<li>
					<button
						type="button"
						className="text-error"
						onClick={close /* TODO: delete action + confirm */}
					>
						Delete
					</button>
				</li>
			</ul>
		</details>
	);
}
