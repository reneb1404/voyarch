import { CreateTripAdditionalSection } from "./additional-section";
import { CreateTripBasicSection } from "./basic-section";

export function CreateTripSection() {
	return (
		<>
			<CreateTripBasicSection />
			<CreateTripAdditionalSection />
		</>
	);
}
