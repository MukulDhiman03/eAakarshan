import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/Firebase";

const Logo = () => {
  return (
    <Link to="/" className="mx-2 font-bold text-4xl cursor-pointer">
      <span style={{ color: "violet" }}>eAaka</span>
      <span style={{ color: "yellowgreen" }}>rshan</span>
    </Link>
  );
};

const Header = () => {
  const items = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);

  const logOutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="flex flex-wrap justify-between mt-2 border-t-2 border-b-2 p-2">
      <Logo />
      <ul className="flex flex-wrap text-3xl font-bold bigheader">
        <li className="m-2">
          <Link to="/">Home</Link>
        </li>

        <li className="m-2">
          <Link to="mens">Mens</Link>
        </li>
        <li className="m-2">
          <Link to="/womens">Womens</Link>
        </li>
        <li className="m-2">
          <Link to="/jwellery">Jwellery</Link>
        </li>
        <li className="m-2">
          <Link to="/electronics">Electronics</Link>
        </li>
        <li className="m-2">
          <Link to="/cart">
            <ShoppingCartIcon sx={{ fontSize: "larger" }} />
            {items.length != 0 ? `-${items.length}` : ``}
          </Link>
        </li>
      </ul>
      <div className="flex">
        {user ? (
          <div className="m-2">
            <Button variant="contained" onClick={logOutHandler}>
              <Link>LogOut</Link>
            </Button>
          </div>
        ) : (
          <div className="m-2">
            <Button variant="contained">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
