import React, { Fragment } from "react";
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar'
import SignIn from "../../SignIn/SignIn";
import Dashboard from "../../Dashboard/Dashboard";
import { useAuth } from "../../../hooks/hooks";


export default function LayoutRender() {
  const auth = useAuth()
  const isLogged = !!auth._id

  if (isLogged) {
    return (
      <Fragment>
        <Sidebar />
        <main className="content">
          <Topbar />
          <Dashboard />
        </main>
      </Fragment>
    )
  }
  return <SignIn />

}