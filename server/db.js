const { Client } = require('pg');

const client = new Client({
    user: 'julianbowman',
    password: 'montigue',
    host: 'localhost',
    port: 5432,
    database: 'thermal_springs'
});

client.connect();

module.exports = client;