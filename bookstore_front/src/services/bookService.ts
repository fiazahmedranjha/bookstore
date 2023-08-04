import axios from 'axios';
import { Book } from '../atoms/bookState';

const BASE_URL = 'YOUR_REST_API_BASE_URL';

export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const response = await axios.get<Book[]>(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
