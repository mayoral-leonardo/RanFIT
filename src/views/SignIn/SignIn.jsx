import React from "react"
import { Box, Button, InputLabel, TextField } from "@mui/material"
import Header from "../../components/Header/Header"

export default function SignIn() {
  const iconLogo = require('../../assets/img/icon-logo.png')
  return (
    <div className='signin_main_container'>
      <Box
        display="flex"
        flexDirection="row"
        width="60%"
        height="80%"
        bgcolor="#FFFFFF"
      >
        <div className='signin_logo_container'>
          <img
            src={iconLogo}
            alt="Logo"
            width="70%"
            height="70%"
          />
        </div>

        <div className='signin_form_container'>
          <div className='signin_form_card'>
            <Header
              title="Bem-vindo(a) ao RanFIT"
              subtitle="Acesse sua conta!"
            />

            <div className='signin_form'>
              <InputLabel htmlFor="email-input">Email</InputLabel>
              <TextField
                className="signin_form_input"
                id="email-input"
                variant="outlined"
                style={{ marginBottom: "10px" }}
              />
              <InputLabel htmlFor="password-input">Senha</InputLabel>
              <TextField
                className="signin_form_input"
                id="password-input"
                variant="outlined"
                style={{ marginTop: "10px" }}
              />
            </div>
            <Button variant="contained">Entrar</Button>
          </div>
        </div>
      </Box>
    </div>
  )
}