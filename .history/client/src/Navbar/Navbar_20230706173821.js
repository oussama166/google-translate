import React from 'react'
import { IoApps } from 'react-icons/io5'
import { MdCircleNotifications } from 'react-icons/md'
 

const Navbar = () => {
    return (
        <div
            className='
            w-full flex flex-row  justify-between items-center text-white font-bold bg-blue-500 shadow-lg px-4 font-google
            '
        >
            <div className='font-bold text-xl tracking-wide'>
                Google<span className=' font-medium'> Translator</span>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='mr-1 p-2 cursor-pointer '>
                        <IoApps size={24} />
                    </div>
                    <div className='mr-1 p-2 cursor-pointer'>
                        <MdCircleNotifications size={30} />
                    </div>
                    <div className='mr-1 p-2 cursor-pointer'>
                        <img
                            src='/pexels-photo-6274712.png'
                            alt='Google Translate'
                            className='w-8 h-8 rounded-full object-cover border-2 border-white'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
