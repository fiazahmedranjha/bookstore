import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as  BookController  from './controllers/BookController';

const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// BookController Routes
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