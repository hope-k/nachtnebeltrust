import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useSelector} from 'react-redux'

const ProtectedRoute = ({auth, authLoading, role }) => {
    
const  {pinVerified} = useSelector(state => state.auth)
    if (!authLoading && auth === true && role === 'user' && pinVerified === true){
        return <Outlet />
    }

    if (auth === true && pinVerified === false && role === 'user'){
        return <Navigate to='/pin' />
    }
    

    return <Navigate to={'/sign-in'}/>
}

export default ProtectedRoute