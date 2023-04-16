import React from 'react';
import Dashboard from './views/Dashboard/Dashboard';
import Topbar from './views/global/Topbar/Topbar';

function App() {
  return (
    <div className="app">
      <main className="content">
        <Topbar/>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
