import React from "react"
import { ReactComponent as LogoIcon } from '../../assets/img/icon-logo.svg'
import { Box, Button, InputLabel, TextField } from "@mui/material"
import Header from "../../components/Header/Header"
import { authActions } from "../../store/modules/auth/authActions"
import { useDispatch } from "react-redux"

const mockedUserData = {
  _id: "12345",
  name: "Gerônimo",
  level: "goer"
}

export default function SignIn() {
  const dispatch = useDispatch()

  function handleSignIn () {
    dispatch(authActions.signIn(mockedUserData))
  }
  
  return (
    <div className='signin_main_container'>
      <Box
        className="signin_box"
        display="flex"
        flexDirection="row"
        width="60%"
        height="80%"
        bgcolor="#FFFFFF"
      >
        <div className='signin_logo_container'>
          <LogoIcon className="signin_logo" />
        </div>

        <div className='signin_form_container'>
          <div className='signin_form_card'>
            <Header
              title="Bem-vindo(a) ao RanFIT"
              subtitle="Acesse sua conta!"
            />

            <div className='signin_form'>
              <InputLabel htmlFor="email-input" style={{ fontWeight: "bold" }}>Email</InputLabel>
              <TextField
                className="signin_form_input"
                id="email-input"
                variant="outlined"
                style={{ marginBottom: "10px" }}
              />
              <InputLabel htmlFor="password-input" style={{ fontWeight: "bold" }}>Senha</InputLabel>
              <TextField
                className="signin_form_input"
                id="password-input"
                variant="outlined"
                style={{ marginTop: "10px" }}
              />
            </div>
            <Button
              type="primary"
              variant="contained"
              onClick={() => handleSignIn()}
            >
              Entrar
            </Button>
          </div>
        </div>
      </Box>
    </div>
  )
}