import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function CreateTripHeader() {
	return (
		<Card>
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div className="space-y-1">
					<h1 className="text-xl font-semibold">Create a new trip</h1>
					<p className="text-sm text-base-content/60">
						Plan your next adventure. Add the key details below to get started.
					</p>
				</div>
				<div className="flex shrink-0 items-center gap-2">
					<Button variant="neutral" type="button">
						Save as draft
					</Button>
					<Button variant="primary" type="submit">
						Create Trip
					</Button>
				</div>
			</div>
		</Card>
	);
}
