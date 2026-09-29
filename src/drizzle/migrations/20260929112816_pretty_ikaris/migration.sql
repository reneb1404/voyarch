ALTER TABLE "trip" RENAME COLUMN "name" TO "title";--> statement-breakpoint
ALTER TABLE "trip" ADD COLUMN "destination" text;--> statement-breakpoint
ALTER TABLE "trip" ADD COLUMN "trip_type" text;--> statement-breakpoint
ALTER TABLE "trip" ADD COLUMN "budget_ampunt" integer;--> statement-breakpoint
ALTER TABLE "trip" ADD COLUMN "budget_currency" varchar(3);--> statement-breakpoint
ALTER TABLE "trip" ALTER COLUMN "timezone" SET DATA TYPE text USING "timezone"::text;