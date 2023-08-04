import { Book } from '../entity/Book';

export async function getAllBooks(): Promise<Book[]> {
  try {
    const books = await Book.findAll();
    return books;
  } catch (error) {
    throw new Error('Failed to fetch all books from the database.');
  }
}

export async function getBookById(id: number): Promise<Book | null> {
  try {
    const book = await Book.findByPk(id);
    return book;
  } catch (error) {
    throw new Error('Failed to fetch book from the database.');
  }
}

export async function createBook(bookData: Book): Promise<Book> {
  try {
    const newBook = await Book.create(bookData);
    return newBook;
  } catch (error) {
    throw new Error('Failed to create book in the database.');
  }
}

export async function updateBook(id: number, bookData: Book): Promise<Book | null> {
  try {
    const [affectedCount] = await Book.update(bookData, { where: { id } });

    if (affectedCount === 0) {
      return null;
    }

    const updatedBook = await Book.findByPk(id);
    return updatedBook;
  } catch (error) {
    throw new Error('Failed to update book in the database.');
  }
}

export async function deleteBook(id: number): Promise<boolean> {
  try {
    const affectedCount = await Book.destroy({ where: { id } });

    if (affectedCount === 0) {
      return false;
    }

    return true;
  } catch (error) {
    throw new Error('Failed to delete book from the database.');
  }
}
