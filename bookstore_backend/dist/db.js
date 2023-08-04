"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//in case of my sql
const sequelize = new sequelize_1.Sequelize('bookdb', 'Testing', 'Testing@321', {
    host: 'localhost',
    dialect: 'mysql',
});
//import { DB_CONFIG } from './db.config';
// const sequelize = new Sequelize(DB_CONFIG.database, DB_CONFIG.user, DB_CONFIG.password, {
//   host: DB_CONFIG.server,
//   dialect: 'mssql',
//   dialectOptions: {
//     encrypt: DB_CONFIG.options.encrypt,
//     trustServerCertificate: DB_CONFIG.options.trustServerCertificate
//   }
// });
exports.default = sequelize;
