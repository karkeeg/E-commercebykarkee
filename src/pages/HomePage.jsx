import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
      <Carousel />
      <h5 className="text-center p-4">About Me</h5>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4"> 
          {products.slice(0, 6).map((item) => (
            <Cards item={item} key={item.id} /> 
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
