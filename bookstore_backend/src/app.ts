import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as  BookController  from './controllers/BookController';
import sequelize  from './db'; // Import the Sequelize instance from db.ts
//import { initBookModel } from './models/BookModel'; // for mssql db

const app: Application = express();

// Connect to the database and synchronize the models
(async () => {
  try {
    await sequelize.authenticate(); // Test the database connection
    console.log('Database connection established successfully.');

    // Synchronize the models with the database
    await sequelize.sync();
    console.log('Models synchronized with the database.');

    // Initialize the Book model with the Sequelize instance
   //in case of mssql or my sql
   // const BookModel = initBookModel(sequelize);
   // console.log('Book model initialized.');
    //const bookController = new BookController(Book);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
})();



// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// BookController Routes
app.get('/buying_books', BookController.getAllBooks);
app.get('/api/books', BookController.getAllBooks);
app.get('/api/books/:id', BookController.getBookById);
app.post('/api/books', BookController.createBook);
app.put('/api/books/:id', BookController.updateBook);
app.delete('/api/books/:id', BookController.deleteBook);

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Bookstore Backend API.');
});

const PORT: number = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;