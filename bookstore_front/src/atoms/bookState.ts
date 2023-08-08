import { atom } from 'recoil';

export interface Book {
  id: number;
  title: string;
  description: string;
  discountRate: number;
  coverImage: string;
  price: number;
}

const bookState = atom<Book[]>({
  key: 'bookState',
  default: [],
});

export default bookState;
