import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useAuth } from './../hooks/useAuth'

const ProtectedRoute = ({ component: Component, props }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route {...props}>
      {isLoggedIn ? <Component /> : <Redirect to="/" />}
    </Route>
  )
}

export default ProtectedRoute;
