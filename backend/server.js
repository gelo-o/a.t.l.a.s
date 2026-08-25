require('dotenv').config();

const pool = require('./db');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.SERVER_PORT;


app.use(cors({
    origin: `http://localhost:${process.env.FRONTEND_PORT}`
}));

app.use(express.json());

app.post('/api/users', async (req, res) => {
    const {username, password} = req.body;

    const result = await pool.query(
        `INSERT INTO users (username, password)
        VALUES ($1, $2)
        RETURNING id, username`,
        [username, password]
    );

    res.status(201).json(result.rows[0]);
});

app.post('/api/login', async (req, res) => {
    const {username, password} = req.body;

    const result = await pool.query(
        `SELECT username, password
        FROM users
        WHERE username = $1
        AND password = $2`,
        [username, password]
    );

    if(result.rows.length > 0) {
        res.status(200).json({
            message: 'Login Successful'
        });
    }
    else{
        res.status(401).json({
            message: 'Invalid Username or Password'
        });
    }
});

app.listen(PORT, () => {
    console.log(`A.T.L.A.S Backend Server is running at Port ${PORT}`);
}) 