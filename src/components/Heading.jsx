import React from "react";
import { Box, Typography } from "@mui/material";
import '../styles/PageHeading.css';

const Heading = ({ children, tag }) => {
  return (
    <Box>
      <Typography variant={tag} className="heading">{children}</Typography>
    </Box>
  );
};

export default Heading;
