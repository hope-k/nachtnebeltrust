import React from 'react'
import Skeleton from 'react-loading-skeleton'

const TransactionSkeleton = ({numOfSkeletons}) => {
  return (
    <div className='relative max-w-full'>
        {
            Array(numOfSkeletons).fill().map((_, index) => (
                <div className='h-[4rem] w-full flex justify-between'>
                    <div className='flex'>
                        <div className='block'>
                            <Skeleton enableAnimation highlightColor='#66b2b224' className='rounded-full' height={10} width={100} />
                            <Skeleton enableAnimation highlightColor='#66b2b224' className='rounded-full' height={10} width={100} />
                        </div>
                        <div className='block'>
                            <Skeleton enableAnimation highlightColor='#66b2b224' className='rounded-full' height={10} width={80} />
                            <Skeleton enableAnimation highlightColor='#66b2b224' className='rounded-full' height={10} width={150} />
                        </div>
                    </div>
                    <div>
                        <Skeleton enableAnimation highlightColor='#66b2b224' className='rounded-full' height={10} width={80} />
                    </div>
                </div> 
            ))

        }
    </div>
  )
}

export default TransactionSkeleton