import React, { useState } from 'react'
import { HiSwitchHorizontal } from "react-icons/hi"
import Langlist from './Langlist'





const Translate = () => {
    const [langChoise, setLangChoise] = useState('French')
    const [langChoise2, setLangChoise2] = useState('English')
    return (
        <div className='w-full h-screen bg-slate-50 flex flex-col z-[1]'>
            <div className='w-full max-h-64 h-1/2 flex flex-col justify-start items-center bg-blue-500 py-10'>
                {/* THIS BAR OF LANG */}
                <div className='w-1/2 h-14 bg-[#316aba] flex flex-row justify-between items-center rounded-md px-5 font-google'>
                    <span className='cursor-pointer'>{langChoise}</span>
                    <HiSwitchHorizontal size={24} className=' cursor-pointer hover:animate-spin ' />
                    <span className='cursor-pointer'>{langChoise2}</span>
                </div>
                <Langlist choise1={setLangChoise} choise2={setLangChoise2} />
            </div>
        </div>
    )
}

export default Translate