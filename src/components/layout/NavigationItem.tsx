"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItemProps {
	href: string;
	label: string;
}

export function NavigationItem({ href, label }: NavigationItemProps) {
	const pathname = usePathname();
	const isActive = pathname.startsWith(href);
	return (
		<li>
			<Link href={href} className={isActive ? "menu-active" : ""}>
				{label}
			</Link>
		</li>
	);
}
