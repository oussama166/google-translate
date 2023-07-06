import React from 'react'
import { IoApps } from 'react-icons/io5'

const Navbar = () => {
    return (
        <div
            className='
            w-full h-16 flex self-start flex-row justify-between items-center text-white font-bold bg-blue-500 shadow-lg px-4 font-google
            '
        >
            <div className='font-bold text-xl tracking-wide'>
                Google<span className=' font-normal'> Translator</span>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='mr-2 hover:bg-'>
                        <IoApps size={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
