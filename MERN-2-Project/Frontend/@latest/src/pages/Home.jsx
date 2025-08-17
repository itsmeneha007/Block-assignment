import { useEffect, useState } from "react";
import { getBooks } from "../api/api";
import BookCard from "../components/BookCard";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      const res = await getBooks();
      setBooks(res.data);
      setLoading(false);
    }
    fetchBooks();
  }, []);

  if (loading) return <p className="p-4">Loading books...</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}
