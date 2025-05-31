import dotenv from 'dotenv';
dotenv.config();
import postgres from 'postgres';
const connectionString = process.env.DATABASE_URL || 'postgres';
const database = postgres(connectionString);

export default database;

// supabaseConnection