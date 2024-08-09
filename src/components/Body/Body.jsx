import React, { useEffect, useState } from "react";
import BodyCards from "./BodyCards";
import Shimmer from "../Shimmer/Shimmer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../Redux/Slices/UserSlice";

const Body = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [status, setStatus] = useState(true);
  const dispatch = useDispatch();

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
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
