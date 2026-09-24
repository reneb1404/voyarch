import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-8">
			<div className="w-full max-w-md">{children}</div>
		</div>
	);
}
