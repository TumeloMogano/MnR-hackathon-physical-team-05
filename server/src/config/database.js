const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'mnrhack',
    user: 'postgres',
    password: 'pgadmin',
    ssl: false
});

client.connect((err) => {
    if (err) {
        console.error('Connection error:', err.stack);
    } else {
        console.log('Database connected successfully.');
    }
});

module.exports = client;