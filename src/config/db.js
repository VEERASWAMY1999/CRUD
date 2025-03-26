import pkg from "pg";
import dotenv from "dotenv";
const { Pool } = pkg;
dotenv.config();

console.log(process.env.DB_USER);
console.log(process.env.HOST); 
console.log(process.env.DATABASE);
console.log (process.env.PASSWORD);
console.log(process.env.DB_PORT);
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
});

pool.on("connect", () => {
    console.log("connected to the db");
}   ); 
export default pool;