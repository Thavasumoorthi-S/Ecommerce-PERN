const pg = require('pg-promise')();
const connection = 'postgres://postgres:password@localhost:5432/Ecommerce';
const db = pg(connection);
module.exports = db;
