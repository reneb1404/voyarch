import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { authRelations } from "../../auth-schema";
import { relations } from "./relations";

export const db = drizzle(process.env.DATABASE_URL!, {
	relations: { ...authRelations, ...relations },
});
