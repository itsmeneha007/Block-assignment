import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    const intervalId = setInterval(fetchQuote, 30000);
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="app">
      <h1>Daily Quote Generator</h1>

      {loading ? (
        <div className="spinner"></div>
      ) : (
        quote && (
          <div className="quote-box">
            <p className="quote">"{quote.content}"</p>
            <p className="author">- {quote.author}</p>
          </div>
        )
      )}

      <button onClick={fetchQuote} disabled={loading}>
        {loading ? "Loading..." : "Get New Quote"}
      </button>
    </div>
  );
}

export default App;
