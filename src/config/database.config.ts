import { Pool } from "pg";

const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "ninjacar",
    user: "postgres",
    password: "postgres",
});

export default pool;