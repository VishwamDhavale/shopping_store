import React from 'react';
import { Menu, Search, ShoppingBag, UserCircle, UserPen } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';



const Navbar = () => {
    const navLinks = [
        { label: 'Shop', href: '#' },
        { label: 'On Sale', href: '#' },
        { label: 'New Arrivals', href: '#' },
        { label: 'Brands', href: '#' }
    ];
    return (
        <header className="sticky top-0 z-50 bg-white w-full   ">
            <nav className="w-full sm:max-w-screen-2xl mx-auto px-4 sm:px-6 py-3 sm:py-4 ">
                <div className="flex items-center justify-between h-14">
                    {/* Left Section - Logo and Menu */}
                    <div className="flex items-center space-x-4">
                        <Menu className="h-6 w-6 sm:hidden cursor-pointer hover:text-gray-600" />
                        <a href="/" className="font-extrabold text-2xl">SHOP.CO</a>
                    </div>

                    {/* Middle Section - Navigation Links */}
                    <div className="hidden sm:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="hover:text-gray-600 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Section - Search and Icons */}
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        {/* Mobile Search Icon */}
                        <Search className="h-6 w-6 sm:hidden cursor-pointer hover:text-gray-600" />

                        {/* Desktop Search Bar */}
                        <div className="hidden sm:block relative w-64 lg:w-96">
                            <Search
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-gray-200 
                         text-gray-700 placeholder-gray-500 text-sm
                         hover:bg-gray-200 transition-colors"
                            />
                        </div>

                        <ShoppingBag className="h-6 w-6 cursor-pointer hover:text-gray-600" />
                        <UserCircle className="h-6 w-6 cursor-pointer hover:text-gray-600" />
                    </div>
                </div>
            </nav>

            <Separator className='my-5 ' />
        </header>
    )
}

export default Navbar
