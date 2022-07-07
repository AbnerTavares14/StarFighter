import pg from 'pg';
import dotenv from "dotenv";
const { Pool } = pg;
dotenv.config();
const configDatabase = {
    connectionString: process.env.DATABASE_URL,
}

const db = new Pool(configDatabase);
export default db;