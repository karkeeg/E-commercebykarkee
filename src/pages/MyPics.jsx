import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";

const MyPics = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [index, setIndex] = useState(6);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "Sneakers",
    "Sport Shoes",
    "Part mood",
    "men's clothing",
    "jewelery",
  ];

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data); // default to full list
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleCategoryChange = (category) => {
    let updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(category)) {
      updatedCategories = updatedCategories.filter((c) => c !== category);
    } else {
      updatedCategories.push(category);
    }

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length === 0) {
      setFiltered(products);
    } else {
      const filteredData = products.filter((item) =>
        updatedCategories.some((cat) =>
          item.title.toLowerCase().includes(cat.toLowerCase())
        )
      );
      setFiltered(filteredData);
    }

    setIndex(6); // reset index when filters change
  };

  return (
    <div className="product-container d-flex">
      {/* Sidebar */}
      <div className="sidebar p-4 border-end" style={{ width: "250px" }}>
        <h4>Search</h4>
        <div className="inputs">
          {categories.map((category, i) => (
            <div className="form-check my-2" key={i}>
              <input
                className="form-check-input"
                type="checkbox"
                id={category}
                onChange={() => handleCategoryChange(category)}
                checked={selectedCategories.includes(category)}
              />
              <label className="form-check-label" htmlFor={category}>
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mainbar flex-grow-1 px-4">
        <h4 className="mt-4">My Products</h4>

        <div className="container p-4 row row-cols-md-3 g-4">
          {filtered.length > 0 ? (
            filtered
              .slice(0, index)
              .map((item) => <Cards item={item} key={item.id} />)
          ) : (
            <p className="text-muted">
              No products found for selected categories.
            </p>
          )}
        </div>

        {index < filtered.length && (
          <button
            className="btn btn-warning m-2"
            onClick={() => setIndex(index + 3)}
          >
            Show More
          </button>
        )}

        {index > 6 && (
          <button className="btn btn-danger m-2" onClick={() => setIndex(6)}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default MyPics;
