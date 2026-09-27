CREATE TABLE "trip" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"status" text NOT NULL,
	"start_date" date,
	"end_date" date,
	"cover_image_url" text,
	"timezone" timestamp(6) with time zone,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"archived_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "trip" ADD CONSTRAINT "trip_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;