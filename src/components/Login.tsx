import { FormEvent, useContext, useEffect } from "react";
import alkemyApi from "../api/alkemyApi";
import { useForm } from "../hooks/useForm";
import { AlkemyLoginResponse } from "../interfaces/interfaces";
import Swal from "sweetalert2";
import {
  Grid,
  CssBaseline,
  Paper,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const Login = () => {
  const { email, password, onChange, isValidEmail } = useForm({
    email: "challenge@alkemy.org",
    password: "react",
  });
  const { isLogged, errorMessage, addError, clearError, loginUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    isLogged === true && navigate("/home");
  }, [isLogged]);

  useEffect(() => {
    errorMessage && Swal.fire("Error", errorMessage, "error");
    return () => clearError();
  }, [errorMessage]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      addError("Email not valid");

      return;
    }

    loginUser(email, password);

    //credenciales validas
    //email: challenge@alkemy.org
    // password: react
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://res.cloudinary.com/dcxpzamud/image/upload/v1655950762/ogziky6xgtm2znegtigo.png)",
          backgroundRepeat: "no-repeat",
          backgroundColor: grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={onChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
