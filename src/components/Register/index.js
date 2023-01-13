import React, { useEffect, useLayoutEffect, useState } from 'react'
import { LockClosedIcon, FingerPrintIcon } from '@heroicons/react/outline'
import gsap from 'gsap'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'
import { login } from '../../redux/Slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNotifications } from 'reapop'
import { resetAuthError } from '../../redux/Slices/authSlice'
import FadeLoader from 'react-spinners/FadeLoader'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import instance from '../../axios'
import {motion} from 'framer-motion'
import {RotatingLines} from 'react-loader-spinner'

const RegisterPage = () => {
    const { error, loading, isAuthenticated, user, token } = useSelector(state => state.auth)
    const [registerLoading, setRegisterLoading] = useState(false);
    const { notify } = useNotifications()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [ssn, setSsn] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useDispatch();
    const [passwordVisible, setPasswordVisible] = useState(false);


    const togglePasswordVisible = () => {
        setPasswordVisible(!passwordVisible);
    }

    useEffect(() => {
        if (!loading) {
            if (isAuthenticated && user?.role === 'user') {
                window.location.href = ('/account')
            } else if (user?.role === 'admin' && isAuthenticated) {
                window.location.href = '/admin'
            }
        }
        if (error?.length) {
            error?.forEach(err => {
                notify(err, { title: 'Authentication Failure', showDismissButton: true, status: error.includes('processed') ? 'loading' : 'error' })
            })
            dispatch(resetAuthError());
        }
    }, [error, notify, dispatch, isAuthenticated, loading, user])
    useLayoutEffect(() => {
        gsap.from('#registerPage', {
            opacity: 0,
            duration: .85,
            ease: 'power4.inOut'
        })
    }, []);
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setRegisterLoading(true);
            const { data } = await instance.post('/api/register', {
                firstName,
                lastName,
                username,
                password,
                phone,
                dateOfBirth,
                ssn,
                address,
                email,
                image
            }, {
                headers: {
                    'Authorization': `Bearer ${token && token}`
                }
            });
            if (data?.success) {
                setRegisterLoading(false);
                notify('Request for account is being processed you will be contacted by the bank', 'success')
            }
            setPhone('')
            setSsn('')
            setAddress('')
            setDateOfBirth('')
            setFirstName('')
            setLastName('')
            setPassword('')
            setUsername('')
            setEmail('')
            setImage(null)
        } catch (error) {
            setRegisterLoading(false);
            if (error.response.data?.error) {
                error.response.data?.error?.forEach(err => {
                    notify(err, 'error', { title: 'Input Validation Error' })

                })
            }
        }




    }
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setImage(null);
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className='relative' id='registerPage'>
            <div className="registerBg"></div>
            <div className='pt-20 flex justify-center px-8 md:px-24 lg:px-7 relative '>
                <div className=' bg-[rgba(217,224,230,0.88)] z-10 lg:p-12 flex flex-col rounded-2xl relative lg:w-[40%] w-full '>
                    <div className='relative  pb-24 mt-6 whitespace-nowrap justify-center flex flex-col items-center'>
                        <h1 className='font-light text-xl  lg:text-2xl text-[black] lg:flex'>
                            Online Banking Registration Portal
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 ml-2 mb-[.3rem] flex lg:mt-1" fill="none" viewBox="0 0 24 24" stroke="#1c2c5e" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </h1>
                        {
                            loading && <FadeLoader css={{ color: 'red' }} height={10} width={20} margin={1} color='#fff' />
                        }
                    </div>
                    <form className='flex flex-col mx-6 pb-28' onSubmit={submitHandler}>
                        <div className='flex flex-col relative mb-10 lg:mb-8'>
                            <input
                                className='z-[1] rounded-none bg-transparent peer pb-2 border-b border-gray-800 outline-none mb-6 placeholder-transparent focus-within:border-[#161d3f] focus-within:border-b-2 '
                                type='text'
                                placeholder=' '
                                onChange={e => setUsername(e.target.value)}
                                value={username}

                            />
                            <label className=' flex duration-200 transition-all ease-in-out absolute top-[-1.5rem] peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-[#161d3f] peer-focus:font-semibold  peer-placeholder-shown:top-[0] peer-placeholder-shown:text-base text-sm pointer-events-none text-gray-500'>
                                <FingerPrintIcon className='w-4 mr-2 flex' />
                                User ID
                            </label>

                        </div>
                        <div className='flex flex-col relative pb-8 lg:pb-1'>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                className='z-[1] rounded-none tracking-wider appearance-none bg-transparent peer pb-2 border-b border-gray-800 outline-none mb-6 placeholder-transparent focus-within:border-[#161d3f] focus-within:border-b-2'
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder=' '
                                value={password}

                            />
                            <div className='cursor-pointer absolute w-6 right-4 z-10' onClick={() => togglePasswordVisible()}>
                                {passwordVisible ? <EyeOffIcon /> : <EyeIcon />}
                            </div>
                            <label className='flex lg:flex duration-200 transition-all ease-in-out absolute top-[-1.5rem] peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-[#161d3f] peer-focus:font-semibold  peer-placeholder-shown:top-[0] peer-placeholder-shown:text-base text-sm pointer-events-none text-gray-500'>
                                <LockClosedIcon className='w-4 mr-2 flex' />
                                Password
                            </label>

                        </div>
                        <div className='flex flex-col relative pb-8 lg:pb-1'>
                            <input
                                onChange={e => setEmail(e.target.value)}
                                className='z-[1] rounded-none tracking-wider appearance-none bg-transparent peer pb-2 border-b border-gray-800 outline-none mb-6 placeholder-transparent focus-within:border-[#161d3f] focus-within:border-b-2'
                                placeholder=' '
                                value={email}

                            />
                            <label className='flex lg:flex duration-200 transition-all ease-in-out absolute top-[-1.5rem] peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-[#161d3f] peer-focus:font-semibold  peer-placeholder-shown:top-[0] peer-placeholder-shown:text-base text-sm pointer-events-none text-gray-500'>
                                Email
                            </label>

                        </div>
                        <div className='flex flex-col relative pb-8 lg:pb-1'>
                            <input
                                onChange={e => setFirstName(e.target.value)}
                                className='z-[1] rounded-none tracking-wider appearance-none bg-transparent peer pb-2 border-b border-gray-800 outline-none mb-6 placeholder-transparent focus-within:border-[#161d3f] focus-within:border-b-2'
                                type='text'
                                placeholder=' '
                                value={firstName}
                            />

                            <label className=' lg:flex duration-200 transition-all ease-in-out absolute top-[-1.5rem] peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-[#161d3f] peer-focus:font-semibold  peer-placeholder-shown:top-[0] peer-placeholder-shown:text-base text-sm pointer-events-none text-gray-500'>
                                First Name
                            </label>

                        </div>
                        <div className='flex flex-col relative pb-8 lg:pb-1'>
                            <input
                                onChange={e => setLastName(e.target.value)}
                                className='z-[1] rounded-none tracking-wider appearance-none bg-transparent peer pb-2 border-b border-gray-800 outline-none mb-6 placeholder-transparent focus-within:border-[#161d3f] focus-within:border-b-2'
                                type='text'
                                placeholder=' '
                                value={lastName}
                            />

                            <label className=' lg:flex duration-200 transition-all ease-in-out absolute top-[-1.5rem] peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-[#161d3f] peer-focus:font-semibold  peer-placeholder-shown:top-[0] peer-placeholder-shown:text-base text-sm pointer-events-none text-gray-500'>
                                Last Name
                            </label>

                        </div>
                        <div className='flex flex-col relative pb-8 lg:pb-1'>
                            <NumberFormat
                                autoComplete='off'
                                placeholder='MM/DD/YYYY'
                                format='##/##/####'
                                mask='_'
                                value={dateOfBirth}
                                type='text'
                                name='dateOfBirth'
                                onValueChange={(value) => setDateOfBirth(value.formattedValue)}
                                className='z-[1] rounded-none tracking-wider appearance-none bg-transparent peer pb-2 border-b border-gray-800 outline-none mb-6 placeholder-transparent focus-within:border-[#161d3f] focus-within:border-b-2'


                            />

                            <label className=' lg:flex duration-200 transition-all ease-in-out absolute top-[-1.5rem] peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-[#161d3f] peer-focus:font-semibold  peer-placeholder-shown:top-[0] peer-placeholder-shown:text-base text-sm pointer-events-none text-gray-500'>
                                Date Of Birth
                            </label>

                        </div>
                        <div className='flex flex-col relative pb-8 lg:pb-1'>

                            <NumberFormat

                                autoComplete='off'
                                placeholder=' '
                                format='###-##-####'
                                mask='*'
                                value={ssn}
                                type='text'
                                name='ssn'
                                onValueChange={(value) => setSsn(value.formattedValue)}
                                className='z-[1] rounded-none tracking-wider appearance-none bg-transparent peer pb-2 border-b border-gray-800 outline-none mb-6 placeholder-transparent focus-within:border-[#161d3f] focus-within:border-b-2'


                            />

                            <label className=' lg:flex duration-200 transition-all ease-in-out absolute top-[-1.5rem] peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-[#161d3f] peer-focus:font-semibold  peer-placeholder-shown:top-[0] peer-placeholder-shown:text-base text-sm pointer-events-none text-gray-500'>
                                Social Security Number (SSN)
                            </label>

                        </div>
                        <div className='flex flex-col relative pb-8 lg:pb-1'>
                            <input
                                onChange={e => setAddress(e.target.value)}
                                className='z-[1] rounded-none tracking-wider appearance-none bg-transparent peer pb-2 border-b border-gray-800 outline-none mb-6 placeholder-transparent focus-within:border-[#161d3f] focus-within:border-b-2'
                                type='text'
                                placeholder=' '
                                value={address}

                            />

                            <label className=' lg:flex duration-200 transition-all ease-in-out absolute top-[-1.5rem] peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-[#161d3f] peer-focus:font-semibold  peer-placeholder-shown:top-[0] peer-placeholder-shown:text-base text-sm pointer-events-none text-gray-500'>
                                Address Line 1
                            </label>

                        </div>
                        <div className='flex flex-col relative pb-8 lg:pb-1'>

                            <NumberFormat

                                autoComplete='off'
                                placeholder=' '
                                format='(###)-###-####'
                                mask='_'
                                prefix='+1'
                                type='text'
                                name='phone'
                                value={phone}
                                onValueChange={value => setPhone(value.formattedValue)}
                                className='z-[1] rounded-none tracking-wider appearance-none bg-transparent peer pb-2 border-b border-gray-800 outline-none mb-6 placeholder-transparent focus-within:border-[#161d3f] focus-within:border-b-2'


                            />

                            <label className=' lg:flex duration-200 transition-all ease-in-out absolute top-[-1.5rem] peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-[#161d3f] peer-focus:font-semibold  peer-placeholder-shown:top-[0] peer-placeholder-shown:text-base text-sm pointer-events-none text-gray-500'>
                                Phone
                            </label>

                        </div>
                        <motion.div layout className='flex justify-evenly'>
                            <motion.div layout className="flex items-center justify-center py-5">
                                <label className="cursor-pointer w-24 h-24 rounded-md bg-gray-200 hover:bg-gray-300 p-6 flex items-center justify-center border border-gray-300 hover:border-gray-400 duration-500">
                                    <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span className="ml-2 text-xs leading-normal text-center">Upload A Valid Picture</span>
                                    <input type="file" className="hidden" onChange={handleChange} />
                                </label>
                            </motion.div>
                            {
                                image && (
                                    <motion.div layout className="flex items-center justify-center py-5  rounded-full">
                                        <motion.img
                                            initial={{ x: 20, opacity: 0.1 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            src={image}
                                            alt='profile'
                                            className="w-24 h-24 rounded-full border-teal-500 bg-gray-200 hover:bg-gray-300 p-[0.1rem] flex items-center justify-center border hover:border-gray-400 duration-500 object-cover " />
                                    </motion.div>
                                )
                            }
                        </motion.div>
                        <button disabled={registerLoading && true} type='submit' className='duration-400 flex justify-center items-center bg-[#215107] text-[white] p-3 rounded-lg mb-4 disabled:bg-[#215107a8]'>
                            {
                                registerLoading ?
                                    <div>
                                        <RotatingLines
                                            strokeColor="white"
                                            strokeWidth="1.5"
                                            animationDuration="0.75"
                                            width="30"
                                            visible={true} />

                                    </div> :
                                    <h4>Request An Account</h4>
                            }
                        </button>

                    </form>
                    <div className=' bg-[rgba(0,0,0,0.35)] absolute left-0 bottom-0 w-full lg:h-16 p-4'>
                        <div className='cursor-pointer flex flex-col lg:flex-row w-full h-full text-[#ccc] text-[.9rem] px-8 underline justify-between items-center'>
                            <Link to='/sign-in'>Already got a account? Sign in</Link>
                            <h1>Activate a card </h1>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default RegisterPage