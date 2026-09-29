import {
	date,
	integer,
	pgTable,
	text,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";
import { user } from "../../../auth-schema";
import { TRIP_STATUSES, TRIP_TYPES } from "../constants";

export const trip = pgTable("trip", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	title: text("title").notNull(),
	description: text("description"),
	destination: text("destination"),
	tripType: text("trip_type", {
		enum: TRIP_TYPES,
	}),
	startDate: date("start_date"),
	endDate: date("end_date"),
	budgetAmount: integer("budget_ampunt"),
	budgetCurrency: varchar("budget_currency", {
		length: 3,
		enum: ["EUR", "USD", "GBP", "JPY", "AUD"],
	}),
	status: text("status", {
		enum: TRIP_STATUSES,
	}).notNull(),
	coverImageUrl: text("cover_image_url"),
	timezone: text("timezone"),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
	archivedAt: timestamp("archived_at"),
});
