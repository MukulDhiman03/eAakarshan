import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const SmallHeader = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const items = useSelector((store) => store.cart.items);

  const user = useSelector((store) => store.user);

  const Logo = () => {
    return (
      <Link to="/" className="mx-5 font-bold text-4xl cursor-pointer">
        <span style={{ color: "violet" }}>eAaka</span>
        <span style={{ color: "yellowgreen" }}>rshan</span>
      </Link>
    );
  };

  const DrawerList = (
    <Box
      className="flex flex-col "
      sx={{ width: 230, height: "50vh" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Logo />
      <ul className="mx-2 text-3xl font-bold p-2 smallheader">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="mens">Mens</Link>
        </li>
        <li>
          <Link to="/womens">Womens</Link>
        </li>
        <li>
          <Link to="/jwellery">Jwellery</Link>
        </li>
        <li>
          <Link to="/electronics">Electronics</Link>
        </li>
        <li>
          {/* <Link to="/cart">
            <ShoppingCartIcon sx={{ fontSize: "larger" }} />
            {items.length != 0 ? `-${items.length}` : ``}
          </Link> */}
        </li>
      </ul>
    </Box>
  );

  return (
    <div className="flex justify-between">
      <div>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: "black", fontSize: "3rem" }} />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      <div className="flex">
        <Link to="/cart" className="m-2 ">
          <ShoppingCartIcon sx={{ fontSize: "5vh", color: "black" }} />
          <span className="text-2xl font-bold ">
            {items.length != 0 ? `${items.length}` : ``}
          </span>
        </Link>
        <div>
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
    </div>
  );
};

export default SmallHeader;
