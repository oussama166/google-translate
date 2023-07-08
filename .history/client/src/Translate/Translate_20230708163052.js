import React, { useState } from 'react'
import { HiSwitchHorizontal } from "react-icons/hi"
import Langlist from './Langlist'





const Translate = () => {
    const [langChoise, setLangChoise] = useState('French')
    const [langChoise2, setLangChoise2] = useState('English')
    var isPermute = false;

    const changeLang = () => {
        let temp = langChoise;
        setLangChoise(langChoise2);
        setLangChoise2(temp);
        isPermute = true;

    }
    return (
        <div className='w-full h-screen bg-slate-50 flex flex-col z-[1]'>
            <div className='w-full max-h-72 h-1/2 flex flex-col justify-start items-center bg-blue-500 py-10'>
                {/* THIS BAR OF LANG */}
                <div className='w-1/2 max-h-14 min-h-14 h-14 bg-[#316aba] flex flex-row justify-between items-center rounded-md px-5 font-google'>
                    <span className='cursor-pointer max-w-[120px]'>{langChoise}</span>
                    <HiSwitchHorizontal
                        size={24}
                        className=' cursor-pointer hover:animate-spin'
                        onClick={changeLang}
                    />
                    <span className='cursor-pointer max-w-[120px]'>{langChoise2}</span>
                </div>
                <Langlist choise1={setLangChoise} choise2={setLangChoise2} Permute={isPermute} />
            </div>
            <div
                className='w-full h-1/2 flex flex-col justify-center items-center bg-slate-50'
            >
                <label
                    className="relative block w-full"
                >
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border text-slate-400 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search for anything..."
                        type="text"
                        name="search" />
                </label>
            </div>
        </div>
    )
}

export default Translate
