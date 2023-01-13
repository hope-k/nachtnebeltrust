import React from 'react'
import Skeleton from 'react-loading-skeleton'

const AccountSkeleton = () => {
    return (
        <div>
            <div className='mb-4'>
                <Skeleton style={{ borderRadius: '1rem' }} enableAnimation highlightColor='#66b2b224' className='rounded-full' height={68} width={320} />

            </div>       
             <div>
                <Skeleton style={{ borderRadius: '1rem' }} enableAnimation highlightColor='#66b2b224' className='rounded-full' height={68} width={320} />

            </div>
        </div>
    )
}

export default AccountSkeleton