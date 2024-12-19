import React, { useEffect, useState } from "react";
import "./Home.css";
import { getAllProdect } from "../../ApiService/api";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getAllProdect();
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt="alternative" />
          <h2>{product.title}</h2>
          <p>
            <span className="price">${product.price}</span>
          </p>
          <Link to={`/product/${product.id}`}>
            <button>Product detiles</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
