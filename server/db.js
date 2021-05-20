const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password: 'montigue',
    host: 'ec2-54-151-116-72.us-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'thermal_springs'
});

client.connect();

module.exports = client;