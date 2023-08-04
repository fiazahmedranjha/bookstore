import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { fetchBooks } from './services/bookService';
import bookState, { Book } from './atoms/bookState';
import Card from './components/Card';

const BookList: React.FC = () => {
  const [books, setBooks] = useRecoilState(bookState);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    const fetchBooksData = async () => {
      setIsLoading(true);
      const data = await fetchBooks();
      setBooks(data);
      setIsLoading(false);
    };

    fetchBooksData();
  }, [setBooks]);

  const fetchMoreData = async () => {
    if (isFetchingMore) return;
    setIsFetchingMore(true);

    // Fetch more data using Axios and your pagination logic
    // For example: you can use the length of 'books' array to get the next page
    const nextPage = Math.ceil(books.length / 10) + 1;
    const response = await axios.get<Book[]>(`${BASE_URL}/books?page=${nextPage}`);
    const newData = response.data;
    setBooks([...books, ...newData]);

    setIsFetchingMore(false);
  };

  const handleScroll = () => {
    const scrollPercentage =
      (window.innerHeight + document.documentElement.scrollTop) /
      document.documentElement.offsetHeight;
    if (scrollPercentage >= 0.8) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => <Card key={book.id} book={book} />)
      )}
    </div>
  );
};

export default BookList;
