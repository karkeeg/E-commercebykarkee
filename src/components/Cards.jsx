import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  
  return (
    <div className="col">
      <div className="card shadow" style={{ width: "18rem" }}> {/* Wider card */}
        <img
          src={item.image}
          className="card-img-top"
          alt={item.title}
          style={{ height: "220px", objectFit: "cover" }} // Reduce height
        />
        <div className="card-body flex-column">
          <h5 className="card-title text-truncate">{item.title.slice(0, 15)}...</h5>
          <p className="card-text text-muted">{item.description.slice(0, 25)}...</p>
          <p className="card-text text-primary">
           Category: {item.category}
          </p>
          <p className="fw-bold text-success">Price: ${item.price.toFixed(2)}</p>

          <Link to={`/productdetails/${item.id}`} className="btn btn-warning mt-auto">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
