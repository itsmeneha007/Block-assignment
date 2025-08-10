import { useState } from "react";

function Filters({ products, setFilteredProducts }) {
  const [sortOrder, setSortOrder] = useState("");

  const handleCategoryFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...products];
    if (order === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sorted);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <select onChange={(e) => handleCategoryFilter(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
      </select>

      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="">Sort By Price</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
      </select>
    </div>
  );
}

export default Filters;
