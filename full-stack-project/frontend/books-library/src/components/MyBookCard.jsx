import { useState } from "react";
import { updateBookStatus, updateBookRating } from "../api/api";

export default function MyBookCard({ book }) {
  const [status, setStatus] = useState(book.status);
  const [rating, setRating] = useState(book.rating || 0);

  const handleStatusChange = async (e) => {
    setStatus(e.target.value);
    await updateBookStatus(book.bookId, e.target.value);
  };

  const handleRatingChange = async (e) => {
    const value = parseInt(e.target.value);
    setRating(value);
    await updateBookRating(book.bookId, value);
  };

  return (
    <div className="border rounded p-4 shadow">
      <img src={book.coverImage} alt={book.title} className="w-full h-60 object-cover mb-2"/>
      <h2 className="font-bold">{book.title}</h2>
      <p>{book.author}</p>

      <select value={status} onChange={handleStatusChange} className="mt-2 border rounded p-1">
        <option>Want to Read</option>
        <option>Currently Reading</option>
        <option>Read</option>
      </select>

      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={handleRatingChange}
        className="mt-2 border rounded p-1 w-full"
      />
    </div>
  );
}

