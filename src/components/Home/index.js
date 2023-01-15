import React from 'react'
import { ShieldCheckIcon } from '@heroicons/react/outline'
import { gsap } from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";
import { Link } from 'react-router-dom'
import Intro from '../Intro'
import Services from '../Services';
import Footer from '../Footer';
import { Parallax, Background } from 'react-parallax';

gsap.registerPlugin(TextPlugin);

const Home = () => {


    const serviceListOne = ['Free account', '100% transparent costs', '24/7 support', 'Online banking', 'Mobile banking', 'Full data privacy compliance']
    const serviceListTwo = ['Easy transfers', 'A powerful security infrastructure', 'Business without borders', 'Deposit checks instantly', 'Worldwide Coverage', 'Affiliates and partnership']
    const serviceListThree = ['Corporate Cards', 'International Investments', 'Direct Debit', 'Premium Support', 'Automated Accounting', 'Business Banking']
    return (
        <div>

            <div className='relative' id='homePage'>
                <div
                className='homeBg'
                />
                <div className='relative h-screen md:h-[100vh] lg:overflow-hidden'>

                    <div className=' px-4 lg:px-[10rem] h-full w-full z-10 relative  lg:items-baseline'>
                        <div className='md:pt-[5rem] w-full flex flex-col justify-center items-start relative'>
                            <div id='heading' className='relative whitespace-nowrap flex text-[#cababa] text-[18px] tracking-wider font-light md:pb-11 pb-8 pt-6 lg:pt-8'>
                                <span id='heading'>Invest.</span><span className='ml-6 relative'><ShieldCheckIcon className='w-5 absolute right-14 top-1' /> Secure</span> . Guarantee
                            </div>

                            <h1 className='md:text-4xl text-3xl pb-8 text-[#f0f0f0] lora md:max-w-lg tracking-normal font-semibold'>Welcome to the <span className='border-b-2 border-[#34790e] font-medium tracking-tight  mb-2'>Nachtnebel Trust</span>. Your Next Experience In Trust.</h1>
                            <p className='md:max-w-[100ch] md:text-[16px] text-[14px] text-[#C0C0C0] tracking-wide lg:mb-6'>
                                Nachtnebeltrust is a revolutionary new bank that offers a comprehensive suite of financial services to help you achieve your financial goals. With Nachtnebeltrust, managing your personal finances has never been easier. Our user-friendly platform allows you to easily send and receive money all over the world, giving you the freedom to conduct business and manage your finances on a global scale.
                                At Nachtnebeltrust, our mission is to empower you to succeed in both your business income management and your personal finances. We understand that achieving financial success takes time and effort, and we're here to help you every step of the way. With our cutting-edge technology and unparalleled customer service, we're committed to making your banking experience as seamless and stress-free as possible. Join Nachtnebeltrust today and take control of your financial future.
                            </p>

                        </div>
                            <div className='flex font-light text-[#ccc] pt-4 md:pt-1  lg:pb-[1rem] flex-wrap w-full justify-between relative'>
                                <Link to='/sign-in' id='bankings' className=' md:mr-20 cursor-pointer hover:text-blue-300 duration-500 hover:border-b-4 pb-2 border-cyan-700 mb-2 '>
                                    <div className='relative '>
                                        <div className='absolute top-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className='md:ml-8 ml-7  '>
                                            <div className='mb-1'>Online</div>
                                            <hr className='w-[5rem] md:w-[10rem]' />
                                            <div className='mt-1'>Banking</div>
                                        </div>
                                    </div>

                                </Link>                                
                                <Link to='/sign-in' id='bankings' className=' md:mr-20 cursor-pointer hover:text-blue-300 duration-500 hover:border-b-4 pb-2 border-cyan-700 mb-2 '>
                                    <div className='relative '>
                                        <div className='absolute top-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className='md:ml-8 ml-7  '>
                                            <div className='mb-1'>Business</div>
                                            <hr className='w-[5rem] md:w-[10rem]' />
                                            <div className='mt-1'>Banking</div>
                                        </div>
                                    </div>

                                </Link>                               
                                 <Link to='/sign-in' id='bankings' className=' md:mr-20 cursor-pointer hover:text-blue-300 duration-500 hover:border-b-4 pb-2 border-cyan-700 mb-2 '>
                                    <div className='relative '>
                                        <div className='absolute top-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className='md:ml-8 ml-7  '>
                                            <div className='mb-1'>Personal</div>
                                            <hr className='w-[5rem] md:w-[10rem]' />
                                            <div className='mt-1'>Banking</div>
                                        </div>
                                    </div>

                                </Link>


      

                            </div>
                    </div>
                </div>

                <Intro />
                <Services
                    title='For People, Entrepreneurs and Business Men'
                    description='Our bank is equiped with the right tools to grow both your personal and business incomex.'
                    image='/serviceOne.png'
                    services={serviceListOne}
                />
                <Services
                    title='Small- to medium-sized businesses'
                    description='Our bank is perfect for SMEs'
                    image='/serviceTwo.png'
                    services={serviceListTwo}
                    reversed
                />
                <Services
                    title='Large or enterprise level businesses'
                    description='We render top class services to all our corporate customers, providing world class business products at their disposal.'
                    image='/serviceThree.png'
                    services={serviceListThree}

                />
                <Footer />

            </div>



        </div>
    )
}

export default Home