import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import createUserTable from './data/createUserTable.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api",userRoutes);

// error handling middleware
app.use(errorHandler);

//create tables before starting server
createUserTable();
// Testing POSTGRES connection

app.get("/", async(req,res)=>{
    const result= await pool.query("SELECT current_database()");
    console.log("the result", result.rows);
    res.send(`The database name is: ${result.rows[0].current_database}`);     
})

// server running
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});