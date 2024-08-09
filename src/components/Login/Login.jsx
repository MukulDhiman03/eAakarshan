import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { toast, ToastContainer } from "react-toastify";
import { useMediaQuery } from "@mui/material";
import { checkValidData } from "../../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/Slices/UserSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState("");

  const [signUpToggler, setSignUpToggler] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");

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
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const clickHandler = () => {
    if (emailError || passwordError || usernameError) return;
    const message = checkValidData(email, password, username);
    setError(message);

    if (message) return;

    if (signUpToggler) {
      // register user with email and password
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          const { uid, email, displayName } = auth.currentUser;

          dispatch(addUser({ uid, email, displayName }));
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      //log in
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Signed in
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }

    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: isMobile ? "90vw" : isTablet ? "50vw" : "30vw",
          padding: "20px",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          boxShadow: "5px 5px 5px 5px rgba(1, 1, 1, 0.5)",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 20, fontWeight: "bolder", margin: "4px" }}
          >
            {signUpToggler
              ? "Sign Up To Place Your Order"
              : "Log In Here To Place Your Order"}
          </Typography>
          {signUpToggler && (
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
          )}
          <TextField
            id="outlined-basic"
            label="Email Id"
            variant="outlined"
            sx={{ margin: "4px" }}
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Email is required" : ""}
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
          <p style={{ color: "red", margin: "2px", fontWeight: "bold" }}>
            {error}
          </p>
        </CardContent>

        <Button variant="contained" onClick={clickHandler}>
          {signUpToggler ? "Sign Up" : "Log In"}
        </Button>
        <p
          style={{
            color: "blue",
            cursor: "pointer",
            fontWeight: "bolder",
            marginTop: "5px",
          }}
          onClick={() => setSignUpToggler(!signUpToggler)}
        >
          {signUpToggler
            ? "Already Registered ? Log In Now"
            : "Not Registered Yet ? Sign Up Now"}
        </p>
        <ToastContainer />
      </Card>
    </div>
  );
};

export default Login;
