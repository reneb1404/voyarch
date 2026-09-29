import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-orm/zod";
import { z } from "zod";
import { TRIP_STATUSES, TRIP_TYPES } from "../constants";
import { trip } from "../schema";

export const selectTripSchema = createSelectSchema(trip);

export const insertTripSchema = createInsertSchema(trip, {
	title: (schema) => schema.min(1, "Title is required").max(255),
	description: (schema) => schema.optional(),
	destination: (schema) => schema.optional(),
	tripType: z.enum(TRIP_TYPES),
	startDate: (schema) => schema.optional(),
	endDate: (schema) => schema.optional(),
	budgetAmount: (schema) => schema.optional(),
	budgetCurrency: z.enum(["EUR", "USD", "GBP", "JPY", "AUD"]),
	status: z.enum(TRIP_STATUSES),
	coverImageUrl: (schema) => schema.optional(),
	timezone: (schema) => schema.optional(),
});

export const createTripSchema = insertTripSchema.omit({
	id: true,
	userId: true,
	createdAt: true,
	updatedAt: true,
	archivedAt: true,
});

export const updateTripSchema = createUpdateSchema(trip)
	.omit({
		id: true,
		userId: true,
		createdAt: true,
		updatedAt: true,
		archivedAt: true,
	})
	.partial();

export type Trip = z.infer<typeof selectTripSchema>;
export type CreateTripInput = z.infer<typeof createTripSchema>;
export type UpdateTripInput = z.infer<typeof updateTripSchema>;
