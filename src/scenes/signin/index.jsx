import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "../../assets/Rectangle.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Capture.PNG";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const theme = createTheme();

export default function Signin() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5001/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      navigate("/acceuil");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 14,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <Box mb="5rem">
              <Box width="14rem" height="7rem" component="img" src={Logo} />
            </Box>

            <Box
              display="flex"
              position="relative"
              flexDirection="column"
              right="15.5%"
            >
              <Typography
                component="h1"
                variant="h5"
                fontSize="32px"
                fontWeight="bold"
                mb="0.8rem"
              >
                Se connecter
              </Typography>
              <Grid item>
                <Link
                  onClick={() => navigate("/signup")}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "400",
                    cursor: "pointer",
                  }}
                >
                  Vous n'avez pas de compte ?{" "}
                  <Typography
                    ml="0.5rem"
                    sx={{
                      color: "#FF5200",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    S'inscrire
                  </Typography>
                </Link>
              </Grid>
            </Box>
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
                onChange={handleChange}
                value={data.email}
                label="E-mail"
                name="email"
                autoFocus
                InputLabelProps={{ required: false }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                onChange={handleChange}
                value={data.password}
                id="password"
                InputLabelProps={{ required: false }}
                type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Grid container mt="1rem">
                <Grid item xs textAlign="right">
                  <Link
                    to="/"
                    variant="body2"
                    sx={{ textDecoration: "none" }}
                    fontSize="14px"
                    fontWeight="600"
                    color="#212B36"
                  >
                    J'ai oublié mon mot de passe
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#FF5200",
                  height: "3rem",
                }}
              >
                Se connecter
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
