import { useEffect, useState } from "react";
import { getMyBooks } from "../api/api";
import MyBookCard from "../components/MyBookCard";

export default function MyBooks() {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyBooks() {
      const res = await getMyBooks();
      setMyBooks(res.data);
      setLoading(false);
    }
    fetchMyBooks();
  }, []);

  if (loading) return <p className="p-4">Loading your books...</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {myBooks.map((book) => (
        <MyBookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
}

