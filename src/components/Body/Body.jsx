import React, { useEffect, useState } from "react";
import BodyCards from "./BodyCards";
import Shimmer from "../Shimmer/Shimmer";

const Body = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [status, setStatus] = useState(true);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setAllProducts(data);
  };

  useEffect(() => {
    const handleOnline = () => setStatus(true);
    const handleOffline = () => setStatus(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    getData();
  }, []);

  if (!status) {
    return <h1>Check Your Internet Connection!</h1>;
  }
  return allProducts.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-evenly mt-3 p-3">
      {allProducts.map((data) => {
        return (
          <div key={data.id} className="mt-5">
            <BodyCards data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
