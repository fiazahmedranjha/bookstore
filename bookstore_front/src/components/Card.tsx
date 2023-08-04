import React from 'react';
import { Book } from '../atoms/bookState';

interface CardProps {
  book: Book;
}

const Card: React.FC<CardProps> = ({ book }) => {
  return (
    <div className="flex flex-col p-4 border border-gray-300 rounded-md shadow-md">
      <img
        src={book.coverImage}
        alt={book.title}
        className="h-48 w-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-500">{`Discount: ${book.discountRate}%`}</p>
      <p className="text-sm">{`Price: $${book.price.toFixed(2)}`}</p>
    </div>
  );
};

export default Card;
