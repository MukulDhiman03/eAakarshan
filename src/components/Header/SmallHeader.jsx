import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, colors } from "@mui/material";
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

  const Logo = () => {
    return (
      <Link to="/" className="mx-2 font-bold text-4xl cursor-pointer">
        <span style={{ color: "violet" }}>e</span>
        <span style={{ color: "yellowgreen" }}>Aakarshan</span>
      </Link>
    );
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Logo />
      <ul className="text-start text-3xl font-bold p-2 ">
        <li className="m-2 ">
          <Link className="hover:border-b-8" to="/">
            Home
          </Link>
        </li>

        <li className="m-2">
          <Link className="hover:border-b-8" to="mens">
            Mens
          </Link>
        </li>
        <li className="m-2">
          <Link className="hover:border-b-8" to="/womens">
            Womens
          </Link>
        </li>
        <li className="m-2">
          <Link className="hover:border-b-8" to="/jwellery">
            Jwellery
          </Link>
        </li>
        <li className="m-2">
          <Link className="hover:border-b-8" to="/electronics">
            Electronics
          </Link>
        </li>
        <li className="m-2">
          <Link to="/cart">
            <ShoppingCartIcon sx={{ fontSize: "larger" }} />
            {items.length != 0 ? `-${items.length}` : ``}
          </Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: "black", fontSize: "3rem" }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SmallHeader;
