import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../../Redux/Slices/LoginSlice";

const Logo = () => {
  return (
    <Link to="/" className="mx-2 font-bold text-4xl cursor-pointer">
      <span style={{ color: "violet" }}>e</span>
      <span style={{ color: "yellowgreen" }}>Aakarshan</span>
    </Link>
  );
};

const Header = () => {
  const items = useSelector((store) => store.cart.items);

  const loggedIn = useSelector((store) => store.login.loggedIn);
  console.log(loggedIn);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap justify-between mt-2 border-t-2 border-b-2 p-2">
      <Logo />
      <ul className="flex flex-wrap text-3xl font-bold">
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
        {loggedIn ? (
          <div className="m-2">
            <Button variant="contained" onClick={() => dispatch(logOut())}>
              LogOut
            </Button>
          </div>
        ) : (
          <div className="m-2">
            <Button variant="contained" onClick={() => dispatch(logIn())}>
              LogIn
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
