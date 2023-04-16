import React from "react"
import { Box, IconButton } from "@mui/material"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"

export default function Topbar() {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      backgroundColor="#202A44"
      width="100%"
      p={2}
    >
      <Box
        display="flex"
        borderRadius="3px"
      >
        <IconButton onClick={() => {}}>
          <PersonOutlinedIcon sx={{ color: "#FFFFFF" }}/>
        </IconButton>
      </Box>

    </Box>
  )
}