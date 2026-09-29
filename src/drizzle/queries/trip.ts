import { db } from "../db";
import { trip } from "../schema";
import { CreateTripInput } from "../validation/trip";

export const tripQueries = {
	create: async (userId: string, data: CreateTripInput) => {
		const [newTrip] = await db
			.insert(trip)
			.values({ ...data, userId })
			.returning();

		return newTrip;
	},
	getByUser: async (userId: string) => {
		return await db.query.trip.findMany({
			where: { userId },
			orderBy: (trip, { desc }) => [desc(trip.createdAt)],
		});
	},
};
