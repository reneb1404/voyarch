"use client";

import { ReactNode, useState } from "react";
import { Button } from "../ui/Button";

interface SidebarProps {
	logo: ReactNode;
	mainNav: ReactNode;
}
function SidebarContent({ logo, mainNav }: SidebarProps) {
	return (
		<>
			<div className="mb-3 shrink-0 pt-4 text-center">{logo}</div>
			<nav className="min-h-0 flex-1 overflow-y-auto p-4">{mainNav}</nav>
		</>
	);
}

export function Sidebar(props: SidebarProps) {
	const [mobileOpen, setMobileOpen] = useState<boolean>(false);

	return (
		<>
			<aside className="hidden h-screen w-72 flex-col bg-base-200 lg:flex">
				<SidebarContent {...props} />
			</aside>

			<Button
				variant="ghost"
				className="fixed top-4 left-4 z-30 lg:hidden"
				onClick={() => setMobileOpen(true)}
				aria-label="Open sidebar"
			>
				☰
			</Button>

			{mobileOpen && (
				<>
					<div className="fixed inset-0 z-40 bg-black/50 lg:hidden">
						<aside className="fixed inset-y-0 left-0 z-50 flex h-screen w-72 flex-col bg-base-200 shadow-sm lg:hidden">
							<SidebarContent {...props} />
						</aside>
					</div>
					)
				</>
			)}
		</>
	);
}
