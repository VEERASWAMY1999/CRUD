import pool from "../config/db.js";

const createUserTable = async () => {  
    const queryText = `CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    )`;
    try{
        pool.query(queryText);
        console.log("User table created if not exists")

    }catch(err){
        console.log(err);
    }

    await pool.query(queryText);
}

export default createUserTable;
