import React from "react";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems, "sss");
  return (
    <div className="d-flex flex-column">
      <h2 className="m-5">YOUR ITEMS</h2>
      {cartItems.length > 0
        ? cartItems.map((productCart) => (
            <div className="w-500 border-bottom m-3" key={productCart.id}>
              <img
                alt="productCart"
                className="h-200 float-start"
                src={productCart.image}
              />
              <h5 className="ps-2 mt-2 ">{productCart.name}</h5>
              <span className="d-block p-2">{productCart.price}</span>
              <div className="count">
                <span className="border p-1 m-1 fs-3">+</span>
                <span className=" p-1 m-1 fs-3">0</span>
                <span className="border p-1 m-1 fs-3">-</span>
              </div>
              <div>
                <FaTrash role="button" className="text-danger" />
              </div>
            </div>
          ))
        : "YOU HAVE NO ITEMS "}
    </div>
  );
};

export default Cart;
