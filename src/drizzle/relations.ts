import { defineRelations } from "drizzle-orm";
import { user } from "../../auth-schema";
import { trip } from "./schema";

export const relations = defineRelations({ trip, user }, (r) => ({
	trip: {
		user: r.one.user({
			from: r.trip.userId,
			to: r.user.id,
		}),
	},
}));
