"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CONFIG = void 0;
// db.config.ts
//this configuration is for ms sql server
exports.DB_CONFIG = {
    database: 'booksdb',
    server: '(localdb)\\MSSQLLocalDB',
    // user: 'test', // If using integrated security, you can omit this
    //password: 'Testing@321', // If using integrated security, you can omit this
    options: {
        encrypt: true,
        trustServerCertificate: true // For self-signed certificates in LocalDB
    }
};
