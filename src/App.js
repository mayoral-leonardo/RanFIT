import React, { Fragment } from 'react';
import Dashboard from './views/Dashboard/Dashboard';
import Topbar from './views/global/Topbar/Topbar';
import Sidebar from './views/global/Sidebar/Sidebar'
import { CssBaseline } from "@mui/material";
import './main.css'
import SignIn from './views/SignIn/SignIn';
import { useAuth } from './hooks/hooks';

function App() {
  const auth = useAuth()
  const isLogged = !!auth._id
  return (
    <>
      <CssBaseline />
      <div className="app">
        {isLogged
          ? <Fragment>
            <Sidebar />
            <main className="content">
              <Topbar />
              <Dashboard />
            </main>
          </Fragment>
          : <SignIn />
        }
      </div>
    </>
  );
}

export default App;
