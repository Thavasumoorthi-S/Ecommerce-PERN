const pg = require('pg-promise')();
const connection = 'postgres://postgres:Thava2001@@localhost:5432/Ecommerce';
const db = pg(connection);
module.exports = db;
