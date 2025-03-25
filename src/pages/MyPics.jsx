import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";

const MyPics = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(6); // Initial limit

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  console.log(products)
  return (
    <>
      <div className="product-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h4 className="m-4">Search</h4>
          <div className="inputs">
            {["City Vibes", "Nature Photography", "Village Authenticity"].map((category, i) => (
              <div className="form-check m-4" key={i}>
                <input className="form-check-input" type="checkbox" name="photographyCategory" id={category} />
                <label className="form-check-label" htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mainbar">
          <h4 className="m-4">My Products</h4>

          <div className="container p-4 row row-cols-md-3 g-4 ">
            {products.slice(0, index).map((item) => (
              <Cards item={item} key={item.id} /> 
            ))}
          </div>

          
          {index < products.length && (
            <button className="btn btn-warning m-4" onClick={() => setIndex(index + 3)}>
              Show More
            </button>
          )}
          
          {index > 6 && (
            <button className="btn btn-danger m-4" onClick={() => setIndex(6)}>
              Show Less
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MyPics;
