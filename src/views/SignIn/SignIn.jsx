import React, { useState } from "react"
import { ReactComponent as LogoIcon } from '../../assets/img/icon-logo.svg'
import { Box, Button, InputLabel, TextField } from "@mui/material"
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Header from "../../components/Header/Header"
import { authActions } from "../../store/modules/auth/authActions"
import { useDispatch } from "react-redux"
import signInConsumer from "./consumer"
import { toast } from "react-toastify"

export default function SignIn() {
  const [loading, setLoading] = useState()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()

  async function handleSignIn() {
    if (!email || !password) {
      toast.error('Preencha os dados corretamente!')
      return
    }

    setLoading(true)
    try {
      const response = await signInConsumer(email, password)
      if (response.user) dispatch(authActions.signIn(response.user))
    } catch (error) {
      console.error(error)
      toast.error('Ocorreu um erro! Verifique as informações fornecidas e tente novamente.')
    } finally {
      setLoading(false)
    }

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
                onChange={value => setEmail(value.target.value)}
              />
              <InputLabel htmlFor="password-input" style={{ fontWeight: "bold" }}>Senha</InputLabel>
              <OutlinedInput
                className="signin_form_input"
                id="password-input"
                variant="outlined"
                style={{ marginTop: "10px" }}
                onChange={value => setPassword(value.target.value)}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={event => event.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <Button
              type="primary"
              variant="contained"
              onClick={() => {
                handleSignIn()
              }}
              disabled={loading}
            >
              Entrar
            </Button>
          </div>
        </div>
      </Box>
    </div>
  )
}