import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import BodyCards from "../Body/BodyCards";

const Womens = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setAllProducts(data);
  };
  const mensFilteredProduct = allProducts.filter((data) => {
    return data.category === "women's clothing";
  });

  useEffect(() => {
    getData();
  }, []);

  return allProducts.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-evenly mt-3 p-3">
      {mensFilteredProduct.map((data) => {
        return (
          <div key={data.id} className="mt-5">
            <BodyCards data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default Womens;
