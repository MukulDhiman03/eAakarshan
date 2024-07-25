import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../Redux/Slices/LoginSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(false);
  };

  const handleSubmit = async () => {
    if (username === "") {
      setUsernameError(true);
      return;
    }
    if (password === "") {
      setPasswordError(true);
      return;
    }

    // api call for handling the authentication
    try {
      const formData = {
        username: username,
        password: password,
      };
      const res = await axios.post(
        "https://fakestoreapi.com/auth/login",
        formData
      );
      if (res.status === 200) {
        // toast.success("Successfully logged in");
        let token = res.data.token;
        localStorage.setItem("token", token);
        dispatch(logOut());
        navigate("/");
      } else {
        toast.warn("Check your credentials");
      }
    } catch (error) {
      toast.error("Check your credentials");
    }

    // reset the states to empty after submission
    setUsername("");
    setPassword("");
  };

  return (
    <Card
      sx={{
        width: "25vw",
        padding: "20px",
        marginTop: "50px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        boxShadow: "5px 5px 5px 5px rgba(1, 1, 1, 0.5)",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 20, fontWeight: "bolder", margin: "4px" }}>
          Login Here To Place Your Order
        </Typography>
        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          sx={{ margin: "4px" }}
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          error={usernameError}
          helperText={usernameError ? "Username is required" : ""}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          sx={{ margin: "4px" }}
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
          helperText={passwordError ? "Password is required" : ""}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{ margin: "4px" }}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </CardContent>
      <ToastContainer />
    </Card>
  );
};

export default Login;
