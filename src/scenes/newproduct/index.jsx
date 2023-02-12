import { Check } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Header from "components/Header";
import React from "react";

const NewProduct = () => {
  return (
    <Box m="1.5rem 2.5rem" mt="7rem" height="100%">
      <Typography
        fontSize={"12px"}
        color="#919EAB"
        mb="0.7rem"
      >{`Tableau de bord > Les Produits`}</Typography>
      <Header title="Nouveau produit" color="black" fontSize="24px" />
      <Box
        height="54vh"
        width="100%"
        mt="2.5rem"
        sx={{
          borderRadius: "16px",
          gap: "24px",
          p: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          boxShadow:
            "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        component="form"
      >
        {" "}
        <div>
          <Typography
            width="300px"
            height="22px"
            fontWeight="600"
            fontSize="14px"
            color="#1057C8"
            mb="1.5rem"
            mt="-2rem"
          >
            INFORMATIONS SUR LE PRODUIT
          </Typography>
          <Box width="100%">
            <FormControl sx={{ m: 1, fontSize: 0, width: "47%" }}>
              <InputLabel shrink="true" htmlFor="outlined-adornment-amount">
                ID produit
              </InputLabel>
              <OutlinedInput label="ID produit" />
            </FormControl>
            <FormControl sx={{ m: 1, fontSize: 0, width: "47%" }}>
              <InputLabel shrink="true" htmlFor="outlined-adornment-amount">
                Titre
              </InputLabel>
              <OutlinedInput label="Titre" />
            </FormControl>
          </Box>
          <Box width="100%">
            <FormControl sx={{ m: 1, fontSize: 0, width: "47%" }}>
              <InputLabel shrink="true" htmlFor="outlined-adornment-amount">
                Stock
              </InputLabel>
              <OutlinedInput label="Stock" />
            </FormControl>
            <FormControl sx={{ m: 1, fontSize: 0, width: "47%" }}>
              <InputLabel shrink="true" htmlFor="outlined-adornment-amount">
                Catégorie
              </InputLabel>
              <OutlinedInput label="Catégorie" />
            </FormControl>
          </Box>

          <FormControl fullWidth sx={{ m: 1, pr: "4.8rem" }}>
            <InputLabel shrink="true" htmlFor="outlined-adornment-amount">
              Description
            </InputLabel>
            <OutlinedInput id="outlined-adornment-amount" label="Stock" />
          </FormControl>
          <Box width="100%">
            <FormControl sx={{ m: 1, fontSize: 0, width: "47%" }}>
              <InputLabel shrink="true" htmlFor="outlined-adornment-amount">
                Marque
              </InputLabel>
              <OutlinedInput label="Marque" />
            </FormControl>
            <FormControl sx={{ m: 1, fontSize: 0, width: "47%" }}>
              <InputLabel shrink="true" htmlFor="outlined-adornment-amount">
                Remise
              </InputLabel>
              <OutlinedInput label="Remise" />
            </FormControl>
          </Box>
          <Box position="absolute" right="6.8%">
            <Box
              type="submit"
             
              sx={{
                display: "flex",
                cursor:"pointer",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "158px",
                height: "48px",
                background: "#FE5E12",
                borderRadius: "8px",
                color: "white",
                mt:"1rem",
              }}
            >
              <Check />
              Enregistrer
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default NewProduct;
