require('dotenv').config();

const pool = require('./db');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.SERVER_PORT;

app.use(cors({
    origin: `${process.env.FRONTEND_IP}`
}));

app.use(express.json());

app.post('/api/users', async (req, res) => {
    const {username, password, first_name, last_name} = req.body;

    const result = await pool.query(
        `INSERT INTO users (username, password, first_name, last_name)
        VALUES ($1, $2, $3, $4)
        RETURNING id, username`,
        [username, password, first_name, last_name]
    );

    res.status(201).json(result.rows[0]);
});

app.post('/api/login', async (req, res) => {
    const {username, password} = req.body;

    const result = await pool.query(
        `SELECT username, password, is_admin, first_name, last_name
        FROM users
        WHERE username = $1
        AND password = $2`,
        [username, password]
    );

    if(result.rows.length > 0) {
        if(result.rows[0].is_admin === false) {
            res.status(200).json({
                message: 'Login Successful!',
                data: {
                    username: result.rows[0].username,
                    role: "End User",
                    first_name: result.rows[0].first_name,
                    last_name:result.rows[0].last_name
                }
            });
        }
        else{
            res.status(200).json({
                message: 'Login Successful!',
                data: {
                    username: result.rows[0].username,
                    role: "Admin",
                    first_name: result.rows[0].first_name,
                    last_name:result.rows[0].last_name
                }
            });
        }

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