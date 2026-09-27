import { Button } from "@/components/ui/Button";

export function CreateTripHeader() {
	return (
		<div className="flex items-center justify-between">
			<div>
				<h1 className="font-semibold text-xl">Create a new trip</h1>
				<p className="text-base-content/60">
					Plan your next adventure. Add the key details below to get started.
				</p>
			</div>
			<div>
				<Button variant="ghost">Save as draft</Button>
				<Button variant="primary">Create Trip</Button>
			</div>
		</div>
	);
}
