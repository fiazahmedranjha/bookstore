"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CONFIG = void 0;
// db.config.ts
//this configuration is ms sql server
exports.DB_CONFIG = {
    database: 'BookDb',
    server: '(localdb)\\MSSQLLocalDB',
    user: 'test',
    password: 'Testing@321',
    options: {
        encrypt: true,
        trustServerCertificate: true // For self-signed certificates in LocalDB
    }
};
