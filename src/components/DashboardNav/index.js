import React from 'react'
import { FaFileInvoice } from 'react-icons/fa'
import { BiTransfer } from 'react-icons/bi'
import { GiHistogram } from 'react-icons/gi'
import { BsEnvelope, BsCashCoin, BsQuestionCircle } from 'react-icons/bs'
import { HiOutlineLogout } from 'react-icons/hi'
import { VscRemote } from 'react-icons/vsc'
import { GiChecklist } from 'react-icons/gi'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/Slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const DashboardNav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation();

  const logoutUser = () => {
    dispatch(logout());
    navigate(0)

  }




  return (
    <>
      <div className='bg-teal-700 fixed top-0 h-[43vh] lg:w-[83.6%] w-screen z-10 rounded-bl-3xl rounded-br-3xl right-0'>
      </div>
      <div className='hidden lg:flex h-full'>
        <div className=' h-full w-[16.4%] fixed left-0 border-r-2 rounded-lg border-gray-100  flex'>
          <div id='dashboardNav' className=' flex flex-col items-center h-full w-full'>
            <div className='w-[16rem]  p-2  rounded-2xl mt-[1rem]'>
              <img src='/hack.png' alt='logo' />
            </div>
            <div className='w-full absolute top-[10rem]'>
              <Link to='/account/dashboard' className={' mb-5 flex items-center w-full px-6 py-[0.62rem] duration-500 ' + (location.pathname === '/account/dashboard' && 'bg-[#74b3e750] flex  font-semibold border-l-[5.5px] border-green-600')}>
                <FaFileInvoice className={' mr-2 text-lg text-[#34790e]'} />
                Account Summary
              </Link>
              <Link to='/account/transfer' className={'mb-5 flex items-center  px-6 py-[0.62rem] duration-500 ' + (location.pathname === '/account/transfer' && 'bg-[#74b3e750] flex  font-semibold border-l-[5.5px] border-green-600')}>
                <BiTransfer className='mr-2 text-2xl text-[#34790e]' />
                Transfer Funds
              </Link>
              <Link to='/account/transactions' className={'mb-5 flex items-center   px-6 py-[0.62rem] duration-500 ' + (location.pathname === '/account/transactions' && 'bg-[#74b3e750] flex  font-semibold border-l-[5.5px] border-green-600')}>
                <GiChecklist className='mr-2 text-2xl text-[#34790e]' />
                Transactions
              </Link>
              <Link to='/account/messages' className={'mb-5 flex items-center   px-6 py-[0.62rem] duration-500 ' + (location.pathname === '/account/messages' && 'bg-[#74b3e750] flex  font-semibold border-l-[5.5px] border-green-600')}>
                <BsEnvelope className='mr-2 text-2xl text-[#34790e]' />
                Messages
              </Link>
              <Link to='/account/payments' className={'mb-5 flex items-center   px-6 py-[0.62rem] ' + (location.pathname === '/account/payments' && 'bg-[#74b3e750] flex  font-semibold border-l-[5.5px] border-green-600')}>
                <BsCashCoin className='mr-2 text-2xl text-[#34790e]' />
                Payments
              </Link>
              <div onClick={() => window.alert('Remote Deposit Currently Unavailable. Sorry for any inconvenience this may cause. Thank You')} className='cursor-pointer mb-5 flex items-center   px-6 py-[0.62rem]'>
                <VscRemote className='mr-2 text-2xl text-[#34790e]' />
                Remote Deposits
              </div>
              <Link onClick={(e) => {
                window.location.href = "mailto:support@nachnebeltrust.com"
                e.preventDefault();
              }} to='#' className='cursor-pointer mb-5 flex items-center   px-6 py-[0.62rem]'
              >
                <BsQuestionCircle className='mr-2 text-2xl text-[#34790e]' />
                Support
              </Link>
              <div onClick={() => logoutUser()} className='cursor-pointer flex items-center  px-6 py-[0.62rem]'>
                <HiOutlineLogout className='mr-2 text-2xl text-red-600' />
                Sign Out
              </div>

            </div>
          </div>

        </div>

      </div>
      <Outlet />
    </>
  )

}

export default DashboardNav