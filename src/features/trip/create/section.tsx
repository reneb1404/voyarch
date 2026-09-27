import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

export function CreateTripSection() {
	const tripOptions = [
		{
			text: "Vacation",
		},
		{
			text: "Road trip",
		},
		{
			text: "Backpacking",
		},
		{
			text: "City trip",
		},
		{
			text: "Adventure",
		},
		{
			text: "Business",
		},
		{
			text: "Family",
		},
		{
			text: "Couples",
		},
		{
			text: "Friends",
		},
	];

	return (
		<div className="flex flex-col gap-4">
			<section>
				<div className="pb-4">
					<h1 className="font-semibold text-xl">Basic Information</h1>
					<p className="text-base-content/60 text-balance">
						Let's start with the essentials.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
					<div className="col-span-2">
						<Input label="Trip title" />
					</div>
					<div className="col-span-2">
						<Input label="Destination" />
					</div>
					<Input label="Start date" type="date" />
					<Input label="End date" type="date" />

					<Input label="Duration" disabled />
					<Select label="Trip type" variant="neutral" options={tripOptions} />
				</div>
			</section>
			<section>
				<div className="pb-4">
					<h1 className="font-semibold text-xl">Additional details</h1>
					<p className="text-base-content/60 text-balance">
						Add more information to personalize your trip.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
					<fieldset className="fieldset col-span-3">
						<legend className="fieldset-legend">Description</legend>
						<textarea
							className="textarea text-balance h-24 w-full"
							placeholder="What are you looking forward to? Any special plans"
						></textarea>
					</fieldset>

					<div></div>
				</div>
			</section>
		</div>
	);
}
