import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  ClearAll,
  AccountBoxTwoTone,
  ShoppingCartTwoTone,
  AccountBalanceTwoTone,
  DescriptionTwoTone,
  BlockTwoTone,
  PostAddTwoTone,
  PostAdd,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.png";
import Logo from "assets/Capture.PNG";

const navItems = [
  {
    text: "Menu",
    icon: null,
  },
  {
    text: "Acceuil",
    icon: <ClearAll />,
  },
  {
    text: "Produits",
    icon: <ShoppingCartTwoTone />,
  },
  {
    text: "Gérer les utilisateurs",
    icon: <AccountBoxTwoTone />,
  },
  {
    text: "Gérer les lieux",
    icon: <AccountBalanceTwoTone />,
  },
  {
    text: "Archive",
    icon: <DescriptionTwoTone />,
  },
  {
    text: "Corbeille",
    icon: <BlockTwoTone />,
  },
];

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  const handleMouseEnter = () => {
    setIsHover(true);
 };
 const handleMouseLeave = () => {
    setIsHover(false);
 };

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: "#FFFFFF",
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
              borderRight: "0.5px dotted #E5E8EB",
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 1rem 3rem">
              <FlexBetween color="#a4a8ab">
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Box
                    component="img"
                    alt="logo"
                    src={Logo}
                    height="80px"
                    width="150px"
                    sx={{ objectFit: "cover" }}
                  />
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <Box mb="0.25rem">
              <Divider />
              <FlexBetween
                textTransform="none"
                gap="1rem"
                m="1.5rem 2.5rem 0 3rem"
              >
                <Box
                  component="img"
                  alt="profile"
                  src={profileImage}
                  height="40px"
                  width="40px"
                  borderRadius="50%"
                  sx={{ objectFit: "cover" }}
                />
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.9rem"
                    sx={{ color: "black" }}
                  >
                    Hugo Diebold
                  </Typography>
                  <Typography fontSize="0.8rem" sx={{ color: "grey" }}>
                    Admin
                  </Typography>
                </Box>
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 2.25rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText ? "#FFEEE6" : "transparent",
                        color: active === lcText ? "#FE5E12" : "black",
                        "& .MuiSvgIcon-root": {
                          color: active === lcText ? "#FE5E12" : "black",
                          // #CDD2D6
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "1.25rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              p="1rem 0.8rem 0.8rem 1rem"
              sx={{ cursor: 'pointer',
                backgroundColor: isHover ? "#F5F5F5" : "#FE5E12",
                
                }}>

                <Box display="flex"  alignItems="center" ml="1.2rem"
                onClick={() => {
                  navigate(`/add-a-product`);
                  setActive("/add-a-product");
                }}
                onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
                >
                  <PostAdd sx={{ color: "#FFAC82" }} />
                  <Typography ml="2.2rem" color="#FFFFFF" sx={{
                    color: isHover ? "#FE5E12" : "white"
                  }}>
                    {" "}
                    Ajouter un produit
                  </Typography>
                </Box>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
