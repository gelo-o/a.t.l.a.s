const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});


pool.query('SELECT NOW()', (error, result) => {
    if (error) {
        console.error('Database connection failed:', error);
    } else {
        console.log('A.T.L.A.S Database connected!');
    }
});

module.exports = pool;   
