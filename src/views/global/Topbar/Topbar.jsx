import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { Box, IconButton, Menu, MenuItem } from "@mui/material"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import LogoutIcon from '@mui/icons-material/Logout';
import { authActions } from "../../../store/modules/auth/authActions";

export default function Topbar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = !!anchorEl
  const dispatch = useDispatch()

  function handleClick (event) {
    setAnchorEl(event.currentTarget);
  }
  
  function handleClose () {
    setAnchorEl(null);
  }

  function handleSignOut () {
    handleClose()
    dispatch(authActions.signOut())
  }

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
        <IconButton
          id="profile-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <PersonOutlinedIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem style={{fontWeight: "bold"}} onClick={handleClose}>Meu perfil</MenuItem>
          <MenuItem style={{fontWeight: "bold"}} onClick={handleSignOut}>Sair <LogoutIcon style={{marginLeft: "5"}}/></MenuItem>
        </Menu>
      </Box>

    </Box>
  )
}