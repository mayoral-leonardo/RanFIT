import React, { Fragment, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar'
import SignIn from "../../SignIn/SignIn";
import getRoutes from "../../../routes/functions/routesFunctions";
import { useAuth } from "../../../hooks/hooks";


export default function LayoutRender() {
  const auth = useAuth()
  const isLogged = !!auth._id
  const userRoutes = getRoutes(auth)
  const navigate = useNavigate()

  useEffect(() => {
    function goToFirstRoute(routes) {
      if (routes) {
        const firstRoute = routes[0]
        navigate(firstRoute.path)
      }
    }
    goToFirstRoute(userRoutes)
  },[userRoutes])

  if (isLogged) {
    return (
      <Fragment>
        <Sidebar />
        <main className="content">
          <Topbar />
            <Routes>
              {userRoutes.map(item => {
                return (
                  <Route
                    key={item.name}
                    exact
                    path={item.path}
                    element={item.component}
                  />
                )
              })}
            </Routes>
        </main>
      </Fragment>
    )
  }
  return <SignIn />

}