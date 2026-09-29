"use client";
import { CreateTripInput, createTripSchema } from "@/drizzle/validation/trip";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { createTrip } from "../action";
import { CreateTripHeader } from "./header";
import { CreateTripHero } from "./hero";
import { CreateTripSection } from "./section";

export function CreateTripForm() {
	const router = useRouter();
	const methods = useForm<CreateTripInput>({
		mode: "onTouched",
		resolver: zodResolver(createTripSchema),
		defaultValues: {
			title: "",
			destination: "",
			startDate: null,
			endDate: null,
			tripType: undefined,
			description: "",
			budgetCurrency: "EUR",
			budgetAmount: null,
			status: "planned",
		},
	});

	const onSubmit = async (data: CreateTripInput) => {
		const result = await createTrip(data);

		if (!result.success) {
			methods.setError("root", {
				message:
					typeof result.error === "string"
						? result.error
						: "Please check your input",
			});
			return;
		}

		router.push(`/trips/${result.trip.id}`);
	};

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit, (errors) =>
					console.log("Validation error:", errors),
				)}
				className="flex flex-col gap-4"
			>
				<CreateTripHeader />
				<CreateTripHero />
				<CreateTripSection />
				{methods.formState.errors.root && (
					<p className="text-error">{methods.formState.errors.root.message}</p>
				)}
			</form>
		</FormProvider>
	);
}
