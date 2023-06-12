import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Box, IconButton, Menu, MenuItem } from "@mui/material"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import LogoutIcon from '@mui/icons-material/Logout';
import { authActions } from "../../../store/modules/auth/authActions";
import { signOutConsumer } from "../../SignIn/consumer";

export default function Topbar() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = !!anchorEl
  const dispatch = useDispatch()

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  async function handleSignOut() {
    try {
      const response = await signOutConsumer()
      if (response) {
        dispatch(authActions.signOut())
        localStorage.removeItem("loggedUser")
        navigate("/")
      }
    } catch (error) {
      console.error(error)
    }
    handleClose()
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
          <MenuItem style={{ fontWeight: "bold" }} onClick={handleClose}>Meu perfil</MenuItem>
          <MenuItem style={{ fontWeight: "bold" }} onClick={handleSignOut}>Sair <LogoutIcon style={{ marginLeft: "5" }} /></MenuItem>
        </Menu>
      </Box>

    </Box>
  )
}