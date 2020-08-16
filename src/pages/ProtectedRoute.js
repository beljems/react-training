import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useAuth } from './../hooks/useAuth'

const ProtectedRoute = ({ component: Component, loggedIn, path, ...props }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
    <Route
      path={path}
      {...props}
      render={props => {
       return loggedIn ? <Component {...props} /> : <Redirect to="/" />;
      }}
     />
    </>
  )
}

export default ProtectedRoute;
