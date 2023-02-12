import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Typography,
  useMediaQuery,
  Select,
  MenuItem,
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";

const DataGridProduit = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [view="Misc", setView] = useState("Misc");
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
  ];
  return (
    <Box m="1.5rem 2.5rem" height="75vh">
      <FormControl sx={{ mt: "1rem" }} p="1rem 2rem 1rem 2rem">
        <InputLabel>Catégories</InputLabel>
        <Select
          width="20%"
          value={view}
          label="Catégories"
          onChange={(e) => setView(e.target.value)}
        >
          <MenuItem value="clothin">Clothing</MenuItem>
          <MenuItem value="accessories">Accessories</MenuItem>
          <MenuItem value="shoes">Shoes</MenuItem>
          <MenuItem value="misc">Misc</MenuItem>
        </Select>
      </FormControl>
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#292A2B",
            borderBottom: "none",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-root": {
            backgroundColor: "#F4F6F8",
          },
          "& .MuiTablePagination-selectLabel": {
            backgroundColor: "#F4F6F8",
            color: "#292A2B",
            borderTop: "none",
          },
          "& .MuiDataGrid-cell": {
            color: "#292A2B",
            backgroundColor: "#FFFFFF",
          },
          "& .MuiInputBase-colorPrimary": {
            color: "#292A2B",
          },
          "& .MuiTablePagination-displayedRows": {
            color: "#292A2B",
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default DataGridProduit;
