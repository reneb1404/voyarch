import { Brand, MainNavigation } from "@/components/layout";
import { Sidebar } from "@/components/layout/Sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen">
			<Sidebar logo={<Brand />} mainNav={<MainNavigation />} />
			<main className="flex-1 bg-base-300 min-h-screen">{children}</main>
		</div>
	);
}
