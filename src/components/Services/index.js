import React from 'react'

const Services = ({
  title,
  image,
  description,
  reversed = false,
  services

}) => {
  const reverseSection = reversed ? 'flex-row-reverse ' : 'flex-row'
  return (
    <div className={`${reverseSection} border-b border-yellow-600 flex px-[2rem] lg:px-[8rem] bg-[#f7fafd] w-full h-full lg:h-[100vh] items-center justify-between flex-wrap flex-col lg:flex-row `}>
      <div className='lg:w-[45%] w-full'>
        <h1 className='text-[28px] mb-12 font-semibold'>{title}</h1>
        <div>
          <p className='text-[#6084a4] mb-6'>{description}</p>
          <ul className='grid lg:grid-cols-2 lg:grid-rows-3 w-full'>
            {
              services.map(s => (
                <div className='bg-[#fff] text-[#6084a4] shadow-2xl rounded-sm p-2  m-2 flex'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9" stroke="green" class="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                  </span>
                  <li className='whitespace-nowrap'>{s}</li>
                </div>
              ))
            }
          </ul>
        </div>

      </div>
      <div className='lg:w-[50%] w-full pb-10 lg:pb-0'>
        <img src={image} alt='heroImage' />
      </div>
    </div>
  )
}

export default Services