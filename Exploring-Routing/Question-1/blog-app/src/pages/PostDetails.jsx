import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  if (!post) return <p>Loading post...</p>;

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="tags">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
};

export default PostDetails;
