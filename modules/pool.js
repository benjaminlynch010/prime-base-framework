// Connect and send SQL to a PostgreSQL DB
const pg = require("pg");

// Represents network connect to DB
const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "database_name", // *** Don't forget to change! ***
});

module.exports = pool;
