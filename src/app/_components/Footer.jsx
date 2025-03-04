import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (

        <div className=' bg-white pt-20  '>
            <div className='w-full sm:max-w-screen-2xl mx-auto  relative'>
                <div className='max-w-screen-2xl sm:w-full px-4 absolute -top-20 z-10 '>
                    {/* Newsletter Box */}
                    <div className='w-full sm:max-w-screen-2xl bg-black rounded-2xl px-8 py-10'>
                        <div className='flex flex-col sm:flex-row sm:justify-around sm:items-center gap-6'>
                            <h2 className='text-4xl text-white font-bold leading-tight'>
                                STAY UPTO DATE ABOUT OUR LATEST OFFERS
                            </h2>
                            <div className='flex flex-col gap-4'>
                                <div className='relative'>
                                    <input
                                        type='email'
                                        placeholder='Enter your email address'
                                        className='w-full px-6 py-4 rounded-full bg-white text-black placeholder-gray-500'
                                    />
                                </div>
                                <button className='w-full py-4 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors'>
                                    Subscribe to Newsletter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full sm:max-w-screen-2xl mx-auto bg-white'>
                <div className=' max-w-screen-2xl mx-auto   relative z-0 rounded-t-2xl bg-[#F0F0F0] sm:px-6 lg:px-8 mt-16'>
                    <div className='h-[300px] sm:h-[100px]'></div>
                    <div className=' grid grid-cols-1 p-4 md:grid-cols-4 gap-8'>
                        <div className='space-y-6 md:col-span-1'>
                            <h2 className='text-3xl font-black'>SHOP.CO</h2>
                            <p className='text-gray-600'>
                                We have clothes that suits your style and which you're proud to wear. From women to men.
                            </p>
                            <div className='flex gap-4'>
                                <a href="#" className='p-2 rounded-full bg-gray-100'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" className='p-2 rounded-full bg-gray-100'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className='font-bold mb-4'>COMPANY</h3>
                            <ul className='space-y-3 text-gray-600'>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Career</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-bold mb-4'>HELP</h3>
                            <ul className='space-y-3 text-gray-600'>
                                <li><a href="#">Customer Support</a></li>
                                <li><a href="#">Delivery Details</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-bold mb-4'>FAQ</h3>
                            <ul className='space-y-3 text-gray-600'>
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Manage Deliveries</a></li>
                                <li><a href="#">Orders</a></li>
                                <li><a href="#">Payments</a></li>
                            </ul>
                        </div>
                        <div className=' sm:flex sm:justify-between sm:items-center sm:col-span-4 max-w-full overflow-clip '>
                            <h3 className='mx-auto w-fit sm:mx-0  font-normal text-gray-400 mb-4'>Shop.co © 2000-2023, All Rights Reserved</h3>
                            <div className='flex items-center justify-evenly '>
                                <Image
                                    src='/Badge.png'
                                    alt='logo'
                                    width={80}
                                    height={40}
                                    className='h-[70px]  object-contain'
                                />
                                <Image
                                    src='/Badge-2.png'
                                    alt='logo'
                                    width={80}
                                    height={40}
                                    className='h-[70px]  object-contain'
                                />
                                <Image
                                    src='/Badge-3.png'
                                    alt='logo'
                                    width={80}
                                    height={40}
                                    className='h-[70px]  object-contain'
                                />
                                <Image
                                    src='/Badge-4.png'
                                    alt='logo'
                                    width={80}
                                    height={40}
                                    className='h-[70px] object-contain'
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Footer
