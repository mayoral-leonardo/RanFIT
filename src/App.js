import React from 'react';
import Dashboard from './views/Dashboard/Dashboard';
import Topbar from './views/global/Topbar/Topbar';
import Sidebar from './views/global/Sidebar/Sidebar'
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
