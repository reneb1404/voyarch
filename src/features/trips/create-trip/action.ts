"use server";
import { tripQueries } from "@/drizzle/queries/trip";
import { CreateTripInput, createTripSchema } from "@/drizzle/validation/trip";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function createTrip(data: CreateTripInput) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) {
		return { success: false as const, error: "Unauthorized" };
	}

	const parsed = createTripSchema.safeParse(data);
	if (!parsed.success) {
		return { success: false as const, error: parsed.error.issues };
	}

	try {
		const trip = await tripQueries.create(session.user.id, parsed.data);
		return { success: true as const, trip };
	} catch (error) {
		console.error("Failed to create trip:", error);
		return { success: false as const, error: "Could not create trip" };
	}
}
