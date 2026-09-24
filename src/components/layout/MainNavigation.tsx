import { NavigationItem } from "./NavigationItem";

const navItems = [
	{
		href: "/dashboard",
		label: "Home",
	},
	{
		href: "/trips",
		label: "My Trips",
	},
	{
		href: "/inspiration",
		label: "Inspiration",
	},
	{
		href: "/planning",
		label: "Planning",
	},
	{
		href: "/maps",
		label: "Maps",
	},
];

const toolItems = [
	{
		href: "/packing-lists",
		label: "Packing lists",
	},
	{
		href: "/budget",
		label: "Budget",
	},
	{
		href: "/documents",
		label: "Documents",
	},
	{
		href: "/notes",
		label: "Notes",
	},
];

export function MainNavigation() {
	return (
		<ul className="menu bg-base-200 min-h-full w-full p-0 gap-2">
			<li className="p-4 pb-2 text-xs opacity-60 tracking-wide uppercase">
				Menu
			</li>
			{navItems.map((navItem) => (
				<NavigationItem key={navItem.href} {...navItem} />
			))}
			<li className="p-4 pb-2 text-xs opacity-60 tracking-wide uppercase">
				Tools
			</li>
			{toolItems.map((toolItem) => (
				<NavigationItem key={toolItem.href} {...toolItem} />
			))}
		</ul>
	);
}
