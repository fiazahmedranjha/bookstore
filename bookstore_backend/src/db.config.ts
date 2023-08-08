// db.config.ts
//this configuration is for ms sql server
export const DB_CONFIG = {
  database: 'booksdb',
  server: '(localdb)\\MSSQLLocalDB',
 // user: 'test', // If using integrated security, you can omit this
  //password: 'Testing@321', // If using integrated security, you can omit this
  options: {
    encrypt: true, // For secure connections
    trustServerCertificate: true // For self-signed certificates in LocalDB
  }
};

  