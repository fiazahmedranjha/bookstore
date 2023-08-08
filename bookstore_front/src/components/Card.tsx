import React from 'react';
import { Book } from '../atoms/bookState';
import '../BOOKLISTPAGE.css'
interface CardProps {
  book: Book;
}

const BookCard: React.FC<CardProps> = ({ book }) => {
  
  return (
    <div className='Frame26086554'>
      <div className='Group26086594'>
        {/* <div className='Rectangle12866' />
        <div className='imagesmode'>
          <div className='Boundingbox' /> */}
          <img className='imagesmode_1' src='/book_image.svg' alt='Book' />
        {/* </div>*/}
      </div> 
      <div className='Frame26086551'>
        <span className='_'>{book.title}</span>
        <div className='Frame26086548'>
          <span className='_10'>{`${book.discountRate}%`}</span>
          <div className='Frame26086547'>
            <span className='_57600'>${book.price.toFixed(2)}</span>
            <span className='__1'>원</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
