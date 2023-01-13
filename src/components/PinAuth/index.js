import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'



const PinAuth = ({ auth }) => {
  return auth === true ? <Outlet /> : <Navigate to={'/sign-in'} />
}

export default PinAuth