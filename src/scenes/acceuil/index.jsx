import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import profileImage from "assets/profile.png";
import BreakdownChart from "components/BreakdownChart";
import DataGridProduit from "components/DataGrid";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";

import { useGetSalesQuery } from "state/api";
import { Chart1, Chart2, Chart3, Chart4 } from "components/ChartDraw";
import { Mail, PlayArrow } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Acceuil = () => {
  const { data, isLoading } = useGetSalesQuery();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
    navigate("/login")
	};

  return (
    <Box>
      <Box position="relative" left="86%" m="2rem 2rem 1rem 3rem">
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 40, height: 40, objectFit: "cover" }}
              alt="logo"
              src={profileImage}
              height="40px"
              width="40px"
              borderRadius="50%"
            ></Avatar>
          </IconButton>
        </Tooltip>

        <Menu
          id="account-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Box display="flex" fontWeight="bold" flexDirection="column">
              Hugo Diebold
              <Box fontSize="14px" color="grey">
                hugo_diebold@data-projekt.fr
              </Box>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Box fontWeight="bold">Mon profil</Box>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Box fontWeight="bold" cursor="pointer" onCLick={handleLogout}>Déconnexion</Box>
          </MenuItem>
        </Menu>
      </Box>
      <Box
        width="91%"
        height="30%"
        borderRadius="16px"
        sx={{ backgroundColor: "#06387A" }}
        m="2.4rem 2rem 3rem 2.2rem"
      >
        <Box width="50%">
          <Typography
            fontSize="32px"
            variant="h3"
            lineHeight="48px"
            p="1rem 0rem 0rem 2rem"
            mb="0.5rem"
            color="#ffffff"
          >
            Bienvenue Hugo !
          </Typography>
          <Box
            component="label"
            fontSize="12px"
            ml="2rem"
            p="0.35rem"
            sx={{
              background: "rgba(255, 255, 255, 0.16)",
              borderRadius: "6px",
            }}
            color="#ffffff"
          >
            Admin
          </Box>
          <Typography
            fontSize="14px"
            lineHeight="22px"
            p="1rem 0rem 0rem 2rem"
            mt="1rem"
            pb="1rem"
            color="#A5B7CF"
          >
            Ultrices sit fringilla morbi tincidunt ut dignissim turpis at. Lorem
            sed mi gravida platea. Feugiat tempor aliquam neque eget mattis.
            Nunc nunc massa tristique sit pulvinar.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          p="0px 0px 0px 12px"
          gap="12px"
          width="653px"
          height="64px"
          ml="2rem"
          sx={{
            boxShadow: "0px 8px 16px rgba(145, 158, 171, 0.16)",
            borderRadius: "8px",
          }}
        >
          <Box
            height="40px"
            width="40px"
            backgroundColor="rgba(255, 82, 0, 0.1)"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            borderRadius="12px"
          >
            <Mail sx={{ color: "#FF5200" }} />
          </Box>
          <Typography fontWeight="bold" fontSize="14px">
            1 nouveau produit ajouté le 11/12/2022
          </Typography>
        </Box>
      </Box>
      <Box ml="1.5rem" mt="3rem" mb="1.5rem">
        <Header title="ETAT DE MES DEMANDES" color="#FE5E12" fontSize="18px" />
      </Box>
      <Box display="flex" justifyContent="space-evenly" width="85%">
        <Box
          sx={{
            boxShadow:
              "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
            borderRadius: "16px",
          }}
          width="60%"
          pt="0.5rem"
          height="420px"
          ml="1.5rem"
        >
          <Box display="flex" justifyContent="space-evenly">
            <Box
              backgroundColor={"white"}
              borderRadius="0.55rem"
              height="200px"
            >
              <FlexBetween>
                <Chart1 />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                >
                  <Typography
                    variant="h3"
                    fontWeight="600"
                    sx={{ color: "black" }}
                  >
                    {data && data.salesByCategory.shoes}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "black" }}>
                    Shoes
                  </Typography>
                </Box>
              </FlexBetween>
            </Box>
            <Box
              backgroundColor={"white"}
              borderRadius="0.55rem"
              height="200px"
            >
              <FlexBetween>
                <Chart2 />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                >
                  <Typography
                    variant="h3"
                    fontWeight="600"
                    sx={{ color: "black" }}
                  >
                    {data && data.salesByCategory.clothing}{" "}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "black" }}>
                    Clothing
                  </Typography>
                </Box>
              </FlexBetween>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-evenly">
            <Box
              backgroundColor={"white"}
              borderRadius="0.55rem"
              height="200px"
            >
              <FlexBetween>
                <Chart3 />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                >
                  <Typography
                    variant="h3"
                    fontWeight="600"
                    sx={{ color: "black" }}
                  >
                    {data && data.salesByCategory.accessories}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "black" }}>
                    Accessories
                  </Typography>
                </Box>
              </FlexBetween>
            </Box>
            <Box
              backgroundColor={"white"}
              borderRadius="0.55rem"
              height="200px"
            >
              <FlexBetween>
                <Chart4 />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                >
                  <Typography
                    variant="h3"
                    fontWeight="600"
                    sx={{ color: "black" }}
                  >
                    {data && data.salesByCategory.misc}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "black" }}>
                    Misc
                  </Typography>
                </Box>
              </FlexBetween>
            </Box>
          </Box>
        </Box>
        <Box width="35%">
          <Box
            width="440px"
            height="520px"
            display="flex"
            alignItems="center"
            sx={{
              boxShadow:
                "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
              borderRadius: "16px",
            }}
          >
            <BreakdownChart />
          </Box>
        </Box>
      </Box>
      <Box ml="1.5rem" mt="3rem">
        <Header title="LES PRODUITS" color="#FE5E12" fontSize="18px" />
      </Box>
      <Box sx={{display: "flex",
      color:'white',
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
padding: "11px 22px",
gap: "8px",
cursor: "pointer",
position: "absolute",
width: "227px",
height: "48px",
left:"86%",


/* SOTERIA/Orange */

background: "#FE5E12",
borderRadius: "8px",}} onClick={() => {
  navigate(`/produits`);
}}><PlayArrow />Voir tout les produits</Box>
      <Box mt="1rem">
        <DataGridProduit />
      </Box>
    </Box>
  );
};

export default Acceuil;
