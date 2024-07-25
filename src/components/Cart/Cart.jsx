import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  return items.length == 0 ? (
    <div>
      <h1 className="text-3xl font-bold text-center mt-5">
        No Items In Cart To Show
      </h1>
      <p className="text-center text-2xl mt-2">
        <Link to="/" style={{ color: "blue" }}>
          Click Here To Add Some Items To Cart
        </Link>
      </p>
    </div>
  ) : (
    <div>
      <h1 className="font-bold text-3xl text-center mt-3">
        No of items in the cart - {items.length}
      </h1>
      <div className="flex flex-wrap justify-evenly mt-3 p-3">
        {items.map((data) => {
          return (
            <div key={data.id} className="mt-5">
              <CartCard data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
