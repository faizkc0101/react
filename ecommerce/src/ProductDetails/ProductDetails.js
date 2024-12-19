import React, { useEffect, useState } from "react";
import { getProdectId } from "../ApiService/api";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [ProductDetails, setProductDetailes] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProdectId(id);
      setProductDetailes(data);
    };
    fetchProductDetails();
  }, [id]);
  return (
    <div className="product-detiles-container">
      <img className="img" src={ProductDetails.image}></img>
      <div className="product-info">
        <h2 className="product-title">{ProductDetails.title}</h2>
        <p className="product-description">{ProductDetails.description} </p>
        <p className="product-price">{ProductDetails.price}</p>
        <button onClick={alert} className="buy-now ">
          Buy now
        </button>
        <Link to="/">
          <button className="go-back">go back to home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
