import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { DashboardHero } from "./hero";
import { DashboardOverview } from "./trip-overview";

export async function DashboardForm() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) {
		redirect("/login");
	}
	return (
		<div className="grid grid-cols-4 gap-4 bg-base-300 px-4">
			<DashboardHero user={session.user} />
			<DashboardOverview />
		</div>
	);
}
