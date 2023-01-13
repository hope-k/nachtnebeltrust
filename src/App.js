import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import AccountDashboard from "./components/AccountDashboard";
import DashboardNav from "./components/DashboardNav";
import Dashboard from "./components/DashboardNav";
import Header from "./components/Header";
import Transfer from "./components/Transfer";
import Home from "./components/Home";
import LoginPage from "./components/Login";
import Transactions from "./components/Transactions";
import Messages from "./components/Messages";
import Payments from "./components/Payments";
import NotificationsSystem, { wyboTheme, useNotifications } from 'reapop'
import { setUpNotifications } from 'reapop'
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUser } from './redux/Slices/currentUserSlice';
import Authenticated from './components/Authenticated';
import ProtectedAdminRoute from './components/Admin/ProtectedAdminRoute';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminTransactions from './components/Admin/AdminTransactions';
import Users from './components/Admin/Users'
import AdminStats from './components/Admin/AdminStats';
import AdminBankAccount from './components/Admin/AdminBankAccount';
import AdminDeposit from './components/Admin/AdminDeposit';
import AdminMessages from './components/Admin/AdminMessages';
import RegisterPage from './components/Register';
import Pin from './components/Pin';
import PinAuth from './components/PinAuth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';




function App() {

  const [profileDropdown, setProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setProfileDropdown(!profileDropdown)
  }
  const navigate = useNavigate()
  const dispatch = useDispatch();




  const { isAuthenticated, loading, user, pinVerified } = useSelector(state => state.auth);
  const { notifications, dismissNotification } = useNotifications();


  useEffect(() => {
    setUpNotifications({
      defaultProps: {
        position: 'top-right',
        dismissible: true,
        dismissAfter: 3500,


      }
    })
  }, []);

  useEffect(() => {
    if (!pinVerified && isAuthenticated && user?.role === 'user') {
      navigate('/pin')
    }
    if (pinVerified && isAuthenticated) {
      navigate('/account/dashboard')
    }
    if (isAuthenticated && user?.role === 'admin') {
      navigate('/admin/users')
    }
    if (isAuthenticated && user?.role === 'super-admin') {
      navigate('/admin/users')
    }

  }, [user?.role])




  return (
    <div>
        <ToastContainer
          position="top-center"
          hideProgressBar

        />


        <NotificationsSystem
          notifications={notifications}
          dismissNotification={dismissNotification}
          theme={wyboTheme}

        />

        <Header profileDropdown={profileDropdown} toggleProfileDropdown={toggleProfileDropdown} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/*' element={<PinAuth auth={isAuthenticated} />}>
            <Route path="pin" element={<Pin />} />
          </Route>


          <Route path='/*' element={<Authenticated auth={isAuthenticated} role={user?.role} />}>
            <Route path="sign-in" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>


          <Route path='/*' element={<ProtectedRoute auth={isAuthenticated} authLoading={loading} role={user?.role} />}>
            <Route path="account" element={<DashboardNav />}>
              <Route path="dashboard" element={<AccountDashboard profileDropdown={profileDropdown} toggleProfileDropdown={toggleProfileDropdown} />} />
              <Route path="transfer" element={<Transfer />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="messages" element={<Messages />} />
              <Route path="payments" element={<Payments />} />
            </Route>
          </Route>

          <Route path='/*' element={<ProtectedAdminRoute role={user?.role} authLoading={loading} auth={isAuthenticated} />}>
            <Route path='admin' element={<AdminDashboard />}>
              <Route path='users' element={<Users />} />
              <Route path='transactions' element={<AdminTransactions />} />
              <Route path='statistics' element={<AdminStats />} />
              <Route path='accounts' element={<AdminBankAccount />} />
              <Route path='deposit' element={<AdminDeposit />} />
              <Route path='messages' element={<AdminMessages />} />
            </Route>
          </Route>
        </Routes>









    </div>
  );
}

export default App;
