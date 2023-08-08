"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const BookModel_1 = require("./models/BookModel");
//for sqlite database
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './booksdb.sqlite', // Path to the SQLite database file. Change this as per your needs.
});
const BookModel = (0, BookModel_1.initBookModel)(sequelize);
//in case of my sql
// const sequelize = new Sequelize('bookdb', 'Testing', 'Testing@321', {
//   host: 'localhost',
//   dialect: 'mysql',
// });
//******For using mssql**** */
// import { DB_CONFIG } from './db.config';
// const sequelize = new Sequelize(DB_CONFIG.database,
//   //  DB_CONFIG.user,
//   //   DB_CONFIG.password,
//      {
//   host: DB_CONFIG.server,
//   dialect: 'mssql',
//   dialectOptions: {
//     encrypt: DB_CONFIG.options.encrypt,
//     trustServerCertificate: DB_CONFIG.options.trustServerCertificate
//   }
// });
exports.default = sequelize;
