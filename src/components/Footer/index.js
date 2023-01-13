import React from 'react'

const Footer = () => {
    return (
        <div className='flex bg-slate-200 shadow-lg lg:px-[6rem] px-[2rem] lg:h-[50vh] flex-wrap w-full'>
            <div className='mt-[3rem] flex flex-col'>
                <div className='w-[300px] h-[300px] absolute'>
                    <img src='/hack.png' alt='logo' />
                </div>
                <p className='font-light relative top-[6rem] max-w-lg text-[15px] text-[#6084a4]'>
                    We’re a leading international banking group committed to building a sustainable business over the long-term. We operate in some of the world's most dynamic markets and have been for over 15 years.
                </p>
            </div>

            <div className='lg:mt-[3rem] lg:mx-[2rem] mt-[8rem]'>
                <h1 className='font-semibold text-lg mb-3'>Quick Links</h1>
                <ul className='text-[#6084a4] leading-5 text-[15px]'>
                    <li className='cursor-pointer'>Services</li>
                    <li className='cursor-pointer'>Blog</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Home</li>
                </ul>
            </div>

            <div className='mt-[3rem] lg:mx-[2rem]'>
                <h1 className='font-semibold text-lg mb-3'>Address</h1>
                <ul className='text-[#6084a4] max-w-lg text-[14.5px]'>
                    <ul>
                        <li><b>New Zealand Address :</b> 23 Albert Street, Auckland Central, New Zealand</li>
                        <li><b>Phone : </b> +64 29 307 8322</li>
                    </ul>
                    <ul className='my-3'>
                        <li><b>Malaysia Address :</b> 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</li>
                        <li><b>Phone : </b> +60166322306</li>
                    </ul>
                    <ul>
                        <li><b>China address :</b> 6 Jianguomen Outer Street Beijing, China
                        </li>
                        <li><b>Phone:</b> +86 42 6592 2681</li>
                    </ul>
                </ul>

            </div>


            <div className='w-full flex justify-center border-t border-gray-300 pt-[10px] lg:pt-[20px]'>
                <span className='text-[#6084a4] text-sm font-light'>Copyright © 2022 Nachtnebeltrust NNT</span>
            </div>
        </div>
    )
}

export default Footer