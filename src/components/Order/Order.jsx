import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const loggedIn = useSelector((store) => store.login.loggedIn);

  return (
    <div>
      <div className="mt-3 text-center font-bold text-3xl">
        Place Your Order Here
      </div>
      <div className="text-center font-bold text-2xl text-red-600">
        {loggedIn
          ? "You Must Login First Before Placing Your Order"
          : "Something went wrong."}
      </div>
    </div>
  );
};

export default Order;
