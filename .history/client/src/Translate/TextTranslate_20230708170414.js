import React from 'react'

const TextTranslate = ({ isDisable }) => {
    return (
        <div className='w-full h-56 flex flex-col shadow-lg bg-slate-100 rounded-lg p-5 font-google'>
            <textarea
                className={`w-full h-48 resize-none bg-transparent text-slate-500 focus:outline-none ${(isDisable) ? 'cursor-not-allowed' : 'cursor-text'}`}
                placeholder='Enter your text here'
                disabled={isDisable}
            ></textarea>

            {/* Bottom bar */}
            <div className='w-full h-8 flex flex-row justify-between items-center  bg-slate-600'>
                het
            </div>

        </div>
    )
}

export default TextTranslate
