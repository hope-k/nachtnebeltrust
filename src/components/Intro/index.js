import React, { useState } from 'react'
import { ReactComponent as PiggyBank } from '../../assets/piggy.svg';
import { ReactComponent as Encrypt } from '../../assets/encrypt.svg';
import { ReactComponent as Pay } from '../../assets/pay.svg';
import { ReactComponent as Secure } from '../../assets/secure.svg';
import { useSpring, useChain, animated, useSpringRef } from 'react-spring'


const Intro = () => {
    const [containerHovered, setContainerHovered] = useState(false);

    const containerAnimation = useSpring({
        from: {
            y: 0
        },
        to: {
            y: containerHovered ? -20 : 0
        },
        config: {
            mass: 0.5,
            tension: 170,
            friction: 26,
            clamp: true

        }
    })
    const svgAnimation = useSpring({
        from: {
            y: 0,
        },
        to: [
            {
                y: containerHovered ? -80 : 0,
                opacity: containerHovered ? 0 : 1,
                rotate: containerHovered ? 360 : 0

            },
            {
                y: 0 ,
                opacity: 1,
                delay: 100

            }
        ],
        config: {
            mass: 1,
            tension: 170,
            friction: 0,
            clamp: true,
            duration: 150

        }
    })






    return (
        <div className=' px-10 lg:px-[10rem] py-20  w-full  bg-slate-100'>
            <div className='bg-white flex justify-between rounded-2xl shadow-2xl border border-gray-200 lg:flex-row flex-col'  >
                <div className='m-3 border-r border-gray-200 flex flex-col justify-center items-center p-5'>
                    <div  className='w-[5rem] mb-4'>
                        <PiggyBank />
                    </div>
                    <h1 className='block font-semibold text-[1.4rem] mb-4'> Saving Benefits</h1>
                    <span className='text-[14px] text-[#6084a4]'>
                        When you save with our savings accounts you get intrest on your money monthly..
                    </span>
                </div>
                <div  className='m-3 border-r border-gray-200 flex flex-col justify-center items-center p-5'>
                    <div  className='w-[5rem] mb-4'>
                        <Encrypt />
                    </div>
                    <h1 className='block font-semibold text-lg text-[1.4rem] mb-4'>Fully Encrypted
                    </h1>
                    <span className='text-[14px] text-[#6084a4]'>
                        Our platform is properly encrypted and all transactions are interception free.
                    </span>
                </div>
                <div  className='m-3 border-r border-gray-200 flex flex-col justify-center items-center p-5'>
                    <div style={svgAnimation} className='w-[5rem] mb-4'>
                        <Pay />
                    </div>
                    <h1 className='block font-semibold text-lg text-[1.4rem] mb-4 whitespace-nowrap'>Modern Payment Options
                    </h1>
                    <span className='text-[14px] text-[#6084a4]'>
                        Pay using modern payment options provided by our bank.
                    </span>
                </div>
                <div style={containerAnimation} className='m-3 flex flex-col justify-center items-center p-5'>
                    <div className='w-[5rem] mb-4'>
                        <Secure />
                    </div>
                    <h1 className='block font-semibold text-lg text-[1.4rem] mb-4'>Safe and Secure
                    </h1>
                    <span className='text-[14px] text-[#6084a4]'>
                        Every account in our bank is secured to world class standards.
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Intro