require('dotenv').config();
const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(
//   process.env.DB_NAME || 'mysql://root:TfUanObypFpNAxTAEPMvGaqsIEOFbevG@mysql.railway.internal:3306/railway',
//   {
//     dialect: "mysql",
//   }
// );

const sequelize = new Sequelize(
  process.env.DB_NAME || 'backend_pos_api',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'Nha1213',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql'
  }
);

module.exports = sequelize;