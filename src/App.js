import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "theme";
import Acceuil from "scenes/acceuil";
import Layout from "scenes/layout";
import Produits from "scenes/produits";
import Login from "scenes/signin";
import Signup from "scenes/signup";
import NewProduct from "scenes/newproduct";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const user = localStorage.getItem("token");

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/acceuil" exact element={<Acceuil />} />
              <Route path="/produits" element={<Produits />} />
              <Route path="/add-a-product" element={<NewProduct/>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
