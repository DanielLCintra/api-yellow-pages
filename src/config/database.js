const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
  host: process.env.API_YELLOWPAGES_DB_HOST,
  user: process.env.API_YELLOWPAGES_DB_USER,
  password: process.env.API_YELLOWPAGES_DB_PASSWORD,
  database: process.env.API_YELLOWPAGES_DB_DATABASE,
  port: process.env.API_YELLOWPAGES_DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

const clientConnectResult = client.connect();

if (clientConnectResult) {
  console.log("Database Connected Successfully");
}

module.exports = client;
