import React from "react";
import { Box, Typography } from "@mui/material";

export default function Header({ title, subtitle }) {
  return (
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mb="30px">
          <Typography
            variant="h5"
            color="#216869"
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            {title}
          </Typography>
          <Typography variant="h6" color="#000000">
            {subtitle}
          </Typography>
        </Box>
      </Box>
  )
}