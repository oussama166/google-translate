import React, { useState } from 'react'
import { HiSwitchHorizontal } from "react-icons/hi"
import Langlist from './Langlist'
import TextTranslate from './TextTranslate'





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
            <div
                className='w-full max-h-72 h-1/2 flex flex-col justify-start items-center bg-blue-500 py-10'>

                {/* THIS BAR OF LANG */}
                <div className='w-1/2 max-h-14 min-h-14 h-14 bg-[#316aba] flex flex-row justify-between items-center rounded-md px-5 font-google flex-shrink-0'>
                    <span className='cursor-pointer max-w-[120px]'>{langChoise}</span>
                    <HiSwitchHorizontal
                        size={24}
                        className=' cursor-pointer hover:animate-spin'
                        onClick={changeLang}
                    />
                    <span className='cursor-pointer max-w-[120px]'>{langChoise2}</span>
                </div>

                {/* Langlist companent */}
                <Langlist choise1={setLangChoise} choise2={setLangChoise2} Permute={isPermute} />

                {/* Form for translate form */}
                <form
                    className='w-3/4 h-56'>
                    <div
                        className='w-full flex flex-row items-center gap-4'
                    >
                        <TextTranslate />
                        <TextTranslate />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Translate
