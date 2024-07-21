import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Slices/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "14px",
  boxShadow: 24,
  p: 4,
};

const BodyCards = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const cartHandler = (data) => {
    dispatch(addItem(data));
    toast.success("Item Added To The Cart");
  };

  return (
    <Card sx={{ width: "300px", height: "670px", position: "relative" }}>
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
        <Typography>
          {data.description.split(" ").slice(0, 10).join(" ")}
          <Button onClick={handleOpen}>Read More.....</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Button onClick={handleClose}>
                <CloseIcon
                  fontSize="large"
                  sx={{
                    background: "blue",
                    color: "white",
                    width: "5vw",
                    borderRadius: "21px",
                  }}
                />
              </Button>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ mt: 2 }}
              >
                {data.description}
              </Typography>
            </Box>
          </Modal>
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Price- Rs {data.price}
        </Typography>
        <Typography variant="h6">Rating- {data.rating.rate}/5</Typography>
        <Typography variant="h6">InStock- {data.rating.count}</Typography>
      </CardContent>
      <CardActions className="absolute bottom-0 w-full p-4 bg-gray-100">
        <Button
          sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
          onClick={() => {
            cartHandler(data);
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
      <ToastContainer />
    </Card>
  );
};

export default BodyCards;
