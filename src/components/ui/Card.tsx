import { ReactNode } from "react";

interface CardProps {
	title?: string;
	children: ReactNode;
	className?: string;
	titleClassName?: string;
}

export function Card({
	title,
	children,
	className,
	titleClassName,
}: CardProps) {
	return (
		<div className={`card bg-base-100 shadow-sm ${className ?? ""}`}>
			<div className="card-body">
				{title && (
					<h2 className={`card-title ${titleClassName ?? ""}`}>{title}</h2>
				)}
				{children}
			</div>
		</div>
	);
}
