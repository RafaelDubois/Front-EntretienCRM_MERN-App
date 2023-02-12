import React from "react";
import {
  Box,
  Typography,

} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";
import DataGridProduit from "components/DataGrid";


const Produits = () => {
  const { data, isLoading } = useGetProductsQuery();
  if (!data || isLoading) return "Loading...";

  const columns = [
    {
        field: "_id",
        headerName: "ID",
        flex: 1,
    },
    {
        field: "name",
        headerName: "Titre",
        flex: 0.5,
    },
    {
      field: "supply",
      headerName: "Stock",
      flex: 0.5,
  },

  {
    field: "category",
    headerName: "Catégorie",
    flex: 0.6,
},
    {
        field: "description",
        headerName: "Description",
        flex: 1,
    },
    {
        field: "price",
        headerName: "Prix",
        flex: 0.5,
    },
    {
        field: "rating",
        headerName: "Remise",
        flex: 0.4,
    },
    

    
  ]
  return (
    <Box m="1.5rem 2.5rem" mt="7rem" height="75vh">
      <Typography fontSize={'12px'} color="#919EAB" mb="0.7rem">{`Tableau de bord > Les Produits`}</Typography>
      <Header title="Les Produits" color='black' fontSize="24px" />
      <DataGridProduit />
    </Box>
  );
};

export default Produits;
