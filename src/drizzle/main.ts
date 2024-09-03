import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { config } from 'dotenv';
import * as schema from './schema'

config({ path: '.env.local' }); // or .env

// read the entire schema i made
export const db = drizzle<typeof schema>(sql, { schema });