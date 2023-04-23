import React, { Fragment } from 'react';
import { CssBaseline } from "@mui/material";
import './main.css'
import LayoutRender from './views/global/LayoutRender/LayoutRender';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <div className="app">
        <LayoutRender />
      </div>
    </Fragment>
  );
}

export default App;
