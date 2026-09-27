import { date, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "../../../auth-schema";

export const trip = pgTable("trip", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	description: text("description"),
	status: text("status", {
		enum: ["planning", "upcoming", "ongoing", "completed", "cancelled"],
	}).notNull(),
	startDate: date("start_date"),
	endDate: date("end_date"),
	coverImageUrl: text("cover_image_url"),
	timezone: timestamp("timezone", { precision: 6, withTimezone: true }),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
	archivedAt: timestamp("archived_at"),
});
