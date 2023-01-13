import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Authenticated = ({ auth, role }) => {
const  {pinVerified} = useSelector(state => state.auth)
    if (auth === true && pinVerified === false && role === 'user') {
        return <Navigate to='/pin' />
    }
    if (auth === true && role === 'user' && pinVerified === true) {
        return <Navigate to={'/account/dashboard'} />
    }
    if (auth === true && role === ('admin' || 'super-admin')) {
        return <Navigate to={'/admin/users'} />
    }

    return <Outlet />



}

export default Authenticated