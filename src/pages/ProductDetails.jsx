import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Rating from "../components/Rating";
import Swal from 'sweetalert2'



const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(); 

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(product)

  if (!product) {
    return <h3 className="text-center my-5">Loading product details...</h3>;
  }


 const handleCart = ()=>{


  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let cart_obj = {
    id : product.id,
    title: product.title,
    category : product.category,
    image : product.image,
    price : product.price,
    quantity : 1

  }

  let cartExist = cartItems.find((item)=>item.id == product.id);

  if(cartExist){
    Swal.fire({
      title: "Item Already Exist !",
      icon: "error",
      draggable: false
    });
    
  
  }
  else{
    cartItems.push(cart_obj);
    localStorage.setItem("cartItems",JSON.stringify(cartItems));

    Swal.fire({
      title: "Item Added to Cart!",
      icon: "success",
      draggable: true
    });
    
  }
 }

  return (
    <div className="container my-4">
      <div className="d-flex p-4">
        <Link to="/mypics">
          <button className="btn btn-primary">Back</button>
        </Link>
        <h2 className="flex-grow-1 text-center m-0">Product Details</h2>
      </div>

      <div className="row border py-3 rounded">
        
        <div className="col-md-4 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid border p-3 rounded"
            style={{ maxHeight: "350px", objectFit: "contain" }}
          />
        </div>

   
        <div className="col-md-7">
          <h3 className="mb-3">{product.title}</h3>
          <p className="text-muted">{product.description}</p>

          <h5 className="text-warning">Category: {product.category}</h5>
<Rating rating={product.rating.rate}/>
          <h4 className="fw-bold text-success mt-3">
            Price: ${product.price.toFixed(2)}
          </h4>

          <button className="btn btn-warning mt-3" onClick={handleCart}>Add to Cart<FaShoppingCart /></button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
