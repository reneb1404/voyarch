import { CreateTripHeader } from "./header";
import { CreateTripHero } from "./hero";
import { CreateTripSection } from "./section";

export function CreateTripForm() {
	return (
		<div className="flex flex-col gap-2 p-4">
			<CreateTripHeader />
			<CreateTripHero />
			<CreateTripSection />
		</div>
	);
}
