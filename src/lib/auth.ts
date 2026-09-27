import { db } from "@/drizzle/db";
import * as schema from "@/drizzle/schema";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { betterAuth } from "better-auth/minimal";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: { ...schema },
	}),
	emailAndPassword: { enabled: true },
});
