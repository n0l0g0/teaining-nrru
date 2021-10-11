import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
  const isLogin = localStorage.getItem('isLogin')
  return (
    <>
      {isLogin ? <Route exact component={props.component} path={props.path} /> : <Redirect to='/' />}
    </>
  )
}

export default PrivateRoute
