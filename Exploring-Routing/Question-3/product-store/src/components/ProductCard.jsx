import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem" }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
