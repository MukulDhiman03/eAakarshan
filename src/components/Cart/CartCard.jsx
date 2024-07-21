import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const CartCard = ({ data }) => {
  return (
    <Card sx={{ width: "300px", height: "520px", position: "relative" }}>
      <CardHeader
        title={data.title.split(" ").slice(0, 3).join(" ")}
        subheader={data.category}
      />
      <CardMedia
        sx={{
          height: 300,
          width: "100%",
          objectFit: "cover",
        }}
        component="img"
        height="20"
        image={data.image}
        alt={data.category}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Price- Rs {data.price}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          InStock- {data.rating.count}
        </Typography>
      </CardContent>
      <CardActions className="absolute bottom-0 w-full p-4 bg-gray-100">
        <Button sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          <Link to="/order">Place Order</Link>
        </Button>
      </CardActions>
      <ToastContainer />
    </Card>
  );
};

export default CartCard;
