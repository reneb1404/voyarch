import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function TripOverviewHeader() {
	return (
		<Card>
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div className="space-y-1">
					<h1 className="text-xl font-semibold">Your trips</h1>
					<p className="text-sm text-base-content/60">
						All your adventures in one place.
					</p>
				</div>
				<div className="flex shrink-0 items-center gap-2">
					<Button variant="primary" type="submit">
						+ New trip
					</Button>
				</div>
			</div>
		</Card>
	);
}
