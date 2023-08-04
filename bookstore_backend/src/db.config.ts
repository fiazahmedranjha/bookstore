// db.config.ts
//this configuration is ms sql server
export const DB_CONFIG = {
  database: 'BookDb',
  server: '(localdb)\\MSSQLLocalDB',
  user: 'test', // If using integrated security, you can omit this
  password: 'Testing@321', // If using integrated security, you can omit this
  options: {
    encrypt: true, // For secure connections
    trustServerCertificate: true // For self-signed certificates in LocalDB
  }
};

  