import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { addTocart } from "../../features/cartSlice";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("./data/products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products, "data");

  const handleAddToCart = (product) => {
    dispatch(addTocart(product))
    console.log("dddd");
  };
  return (
    products &&
    products.map((product) => (
      <div className="w-300 border m-3" key={product.id}>
        <img
          alt="product"
          className="h-200 d-block m-auto"
          src={product.image}
        />
        <h5 className="ps-2">{product.name}</h5>
        <span className="d-block p-2">{product.price}</span>
        <FaShoppingCart
          className="float-end pe-2 fs-2 text-success"
          onClick={() => handleAddToCart(product)}
        />
      </div>
    ))
  );
};

export default ProductCard;
