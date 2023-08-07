import axios from 'axios';
import { Book } from '../atoms/bookState';

const BASE_URL = 'http://localhost:4000/buying_books';

export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const response = await axios.get<Book[]>(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
