import { Typography, Box, useTheme } from "@mui/material";
import React from "react";


const Header = ({ title, color, fontSize }) => {
  return (
    <Box>
        <Typography variant="h2" color={color} fontWeight="bold" sx={{ mb:"5px"}} fontSize={fontSize}>
            {title}
        </Typography>
    </Box>
  )
}

export default Header