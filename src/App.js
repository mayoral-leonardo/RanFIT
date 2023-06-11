import React, { Fragment } from 'react'
import { CssBaseline } from "@mui/material"
import './main.css'
import LayoutRender from './views/global/LayoutRender/LayoutRender'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <div className="app">
        <ToastContainer autoClose={3000} />
        <LayoutRender />
      </div>
    </Fragment>
  );
}

export default App;
