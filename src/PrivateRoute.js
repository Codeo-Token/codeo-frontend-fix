import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';

function PrivateRoute ({component: Component, ...rest}) {
  let token = localStorage.getItem('jwtToken');

  return (
    <Route
      {...rest}
      render={(props) => token
        ? <Component {...props} />
        : <Redirect to={{pathname: '/register', state: {from: props.location}}} />}
    />
  )
}

export default PrivateRoute