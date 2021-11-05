const { Pool, Client } = require('pg')
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    "user": process.env.DB_USER,
    "host": process.env.DB_HOST,
    "database": process.env.DB_NAME,
    "password": process.env.DB_PASS,
    "port": process.env.DB_PORT,
    "max": 20,
    "connectionTimeoutMillis": 10000,
    "idleTimeoutMillis": 10000
})


exports.pool = pool;