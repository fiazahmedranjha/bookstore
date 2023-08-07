import { Sequelize } from 'sequelize';
import { initBookModel } from './models/BookModel';
//for sqlite database
const sequelize = new Sequelize({
  dialect: 'sqlite', // Replace 'sqlite' with your preferred database dialect (mysql, postgres, etc.)
  storage: './booksdb.sqlite', // Path to the SQLite database file. Change this as per your needs.
});
const BookModel = initBookModel(sequelize);


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

export default sequelize;
