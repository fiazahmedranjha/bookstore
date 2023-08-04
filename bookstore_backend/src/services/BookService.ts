import { Book } from '../entity/Book';
import * as BookRepository from '../repository/BookRepository';

export async function getAllBooks(): Promise<Book[]> {
  try {
    const books = await BookRepository.getAllBooks();
    return books;
  } catch (error) {
    throw new Error('Failed to fetch all books from the database.');
  }
}

export async function getBookById(id: number): Promise<Book | null> {
  try {
    const book = await BookRepository.getBookById(id);
    return book;
  } catch (error) {
    throw new Error('Failed to fetch book from the database.');
  }
}

export async function createBook(bookData: Book): Promise<Book> {
  try {
    const newBook = await BookRepository.createBook(bookData);
    return newBook;
  } catch (error) {
    throw new Error('Failed to create book in the database.');
  }
}

export async function updateBook(id: number, bookData: Book): Promise<Book | null> {
  try {
    const updatedBook = await BookRepository.updateBook(id, bookData);
    if (!updatedBook) {
      return null;
    }
    return updatedBook;
  } catch (error) {
    throw new Error('Failed to update book in the database.');
  }
}

export async function deleteBook(id: number): Promise<boolean> {
  try {
    const isDeleted = await BookRepository.deleteBook(id);
    return isDeleted;
  } catch (error) {
    throw new Error('Failed to delete book from the database.');
  }
}
