import Image from 'next/image'
import React from 'react'

const DressStyle = () => {
    return (
        <div className='w-full sm:max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 sm:py-4'>
            <div className='flex flex-col items-center  h-[800px]  bg-gray-100 rounded-3xl px-4 sm:px-6 py-4 sm:py-4 mx-auto'>

                <div className='text-4xl text-balance text-center font-extrabold  mt-5 '>BROWSE BY dress STYLE</div>
                <div className='grid grid-cols-1 w-full sm:grid-cols-3 gap-4 sm:max-w-[1000px] h-auto my-6 sm:my-9'>


                    <div className='relative h-[150px] sm:h-[300px] rounded-2xl overflow-hidden'>
                        <div className='relative h-full w-full'>
                            <Image
                                src='/grid1.png'
                                fill
                                alt='Dress 1'
                                className='object-cover'
                            />
                            <div className='absolute inset-4 text-2xl font-semibold'>Casual</div>
                        </div>
                    </div>


                    <div className='relative h-[150px] w-full sm:h-[300px] sm:col-span-2 rounded-2xl overflow-hidden'>
                        <div className='relative h-full w-full'>
                            <Image
                                src='/grid2.png'
                                fill
                                alt='Dress 2'
                                className='object-cover '
                            />
                            <div className='absolute inset-4 text-2xl font-semibold'>Formals</div>
                        </div>
                    </div>

                    <div className='relative h-[150px] sm:h-[300px] sm:col-span-2 rounded-2xl overflow-hidden'>
                        <div className='relative h-full w-full'>
                            <Image
                                src='/grid3.png'
                                fill
                                alt='Dress 3'
                                className='object-cover'
                            />
                            <div className='absolute inset-4 text-2xl font-semibold'>Party</div>
                        </div>
                    </div>


                    <div className='relative h-[150px] sm:h-[300px] rounded-2xl overflow-hidden'>
                        <div className='relative h-full w-full'>
                            <Image
                                src='/grid4.png'
                                fill
                                alt='Dress 4'
                                className='object-cover'
                            />
                            <div className='absolute inset-4 text-2xl font-semibold'>Gym</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DressStyle
