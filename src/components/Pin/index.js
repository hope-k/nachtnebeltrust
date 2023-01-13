import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PinInput from 'react-pin-input';
import { toast } from 'react-toastify'
import { verifyPin, resetAuthError } from '../../redux/Slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Pin = () => {
  const dispatch = useDispatch()
  const { loading, error, pinVerified, user } = useSelector(state => state.auth)
  const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000));
  const navigate = useNavigate()



  useEffect(() => {
    if (loading) {
      const notify = () => toast.info('Verifying OTP...', {
        toastId: 'verifying-pin',
        isLoading: true,

      })
      notify()

    }
    if (error?.length) {
      const notify = () => toast.update('verifying-pin', {
        render: error[0],
        type: "error",
        isLoading: false,
        theme: 'colored',
        autoClose: 3000,


      })
      notify()
      dispatch(resetAuthError())
    }

    if (pinVerified) {
      const notify = () => {
        toast.update('verifying-pin', {
          render: 'OTP Verification Successful',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          theme: "light"
        })
      }
      notify()
      navigate('/account/dashboard')

    }
  }, [error, loading, pinVerified, navigate])
  const email = user?.email
  const partialEmail = email?.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1*****@$2")



  return (
    <div className="h-screen bg-[#0f766e] py-20 px-3">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-white h-64 py-3 rounded-md text-center">
              <h1 className="text-2xl font-bold">
                OTP Verification
              </h1>

              <div className="flex flex-col mt-4">
                <span>Enter the OTP you received at</span>
                <span className="font-bold">
                  {
                    partialEmail
                  }
                </span>
              </div>

              <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                <PinInput
                  length={6}
                  onChange={(value, index) => { }}
                  type="numeric"
                  inputMode="number"
                  style={{ padding: '5px' }}
                  inputStyle={{ borderColor: 'gray', borderWidth: '1px', borderRadius: '5px', margin: '5px' }}
                  inputFocusStyle={{ borderColor: 'teal', borderWidth: '2px' }}
                  onComplete={(value, index) => { dispatch(verifyPin(value)) }}
                />
              </div>

              <div onClick={() => toast.promise(
                functionThatReturnPromise,
                {
                  pending: 'Sending OTP...',
                  success: ' OTP Sent Successfully',
                  error: ' OTP Sending Failed',

                },

              )} className="flex justify-center text-center mt-5">
                <span className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span className="font-bold">Resend OTP</span><i className='bx bx-caret-right ml-1'></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pin