import { Request, Response } from 'express';
import * as BookService from '../services/BookService';

export async function getAllBooks(req: Request, res: Response): Promise<void> {
  try {
    const books = await BookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch all books from the database.' });
  }
}

export async function getBookById(req: Request, res: Response): Promise<void> {
  const id: number = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid book ID.' });
    return;
  }

  try {
    const book = await BookService.getBookById(id);
    if (!book) {
      res.status(404).json({ error: 'Book not found.' });
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book from the database.' });
  }
}

export async function createBook(req: Request, res: Response): Promise<void> {
  const { title, description, discountedRate, coverImage, price } = req.body;
  console.log("req.body",req.body);
  if (!title || !description || !discountedRate || !price) {
    res.status(400).json({ error: 'Title, description, discountedRate, and price are required.' });
    return;
  }

  try {
    console.log("req.body",req.body);
    const newBook = await BookService.createBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create book in the database.' });
  }
}

export async function updateBook(req: Request, res: Response): Promise<void> {
  const id: number = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid book ID.' });
    return;
  }

  const { title, description, discountedRate, coverImage, price } = req.body;
  if (!title || !description || !discountedRate || !price) {
    res.status(400).json({ error: 'Title, description, discountedRate, and price are required.' });
    return;
  }

  try {
    const updatedBook = await BookService.updateBook(id, req.body);
    if (!updatedBook) {
      res.status(404).json({ error: 'Book not found.' });
      return;
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update book in the database.' });
  }
}

export async function deleteBook(req: Request, res: Response): Promise<void> {
  const id: number = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid book ID.' });
    return;
  }

  try {
    const isDeleted = await BookService.deleteBook(id);
    if (!isDeleted) {
      res.status(404).json({ error: 'Book not found.' });
      return;
    }
    res.status(200).json({ message: 'Book deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book from the database.' });
  }
}
