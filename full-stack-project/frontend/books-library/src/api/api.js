import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, 
});

export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const logoutUser = () => API.get("/auth/logout");
export const getCurrentUser = () => API.get("/auth/me");

export const getBooks = () => API.get("/books");

export const getMyBooks = () => API.get("/mybooks");
export const addBookToMyBooks = (bookId) => API.post(`/mybooks/${bookId}`);
export const updateBookStatus = (bookId, status) => API.patch(`/mybooks/${bookId}/status`, { status });
export const updateBookRating = (bookId, rating) => API.patch(`/mybooks/${bookId}/rating`, { rating });
