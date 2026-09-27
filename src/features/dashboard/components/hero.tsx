import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function DashboardHero({ user }: { user: any }) {
	return (
		<div className="flex flex-col items-between justify-center gap-8 col-span-6">
			<div>
				<p className="text-4xl font-semibold">
					Welcome back, <span className="font-bold">{user.name}</span>
				</p>
				<h1 className="text-4xl text-balance">
					Ready for
					<br /> your next adventure?
				</h1>
				<p className="mt-2 text-base-content/60">
					Plan, organize, and experience unforgettable journeys - with Voyarch
					by your side.
				</p>
			</div>
			<Link href="/trips/new" className="btn btn-primary max-w-xs">
				Plan a new trip
			</Link>
		</div>
	);
}
