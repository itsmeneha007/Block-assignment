import { useAuth } from "../context/AuthContext";
import { addBookToMyBooks } from "../api/api";

export default function BookCard({ book, onAdded }) {
  const { user } = useAuth();

  const handleAdd = async () => {
    if (!user) return alert("Please login to add books!");
    await addBookToMyBooks(book._id);
    alert("Book added to My Books!");
    onAdded && onAdded();
  };

  return (
    <div className="border rounded p-4 shadow">
      <img src={book.coverImage} alt={book.title} className="w-full h-60 object-cover mb-2"/>
      <h2 className="font-bold">{book.title}</h2>
      <p>{book.author}</p>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
      >
        Want to Read
      </button>
    </div>
  );
}

