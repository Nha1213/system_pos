require('dotenv').config();
const { Sequelize } = require('sequelize');

require("dotenv").config();
const { Sequelize } = require("sequelize");

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL is missing");
  process.exit(1);
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "mysql",
  logging: false,
});


// const sequelize = new Sequelize(
//   process.env.DB_NAME || 'backend_pos_api',
//   process.env.DB_USER || 'root',
//   process.env.DB_PASSWORD || 'Nha1213',
//   {
//     host: process.env.DB_HOST || 'localhost',
//     port: process.env.DB_PORT || 3306,
//     dialect: process.env.DB_DIALECT || 'mysql'
//   }
// );

module.exports = sequelize;
