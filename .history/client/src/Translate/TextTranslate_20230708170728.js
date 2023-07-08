import React from 'react'

const TextTranslate = ({ isDisable }) => {
    return (
        <div
            className='w-full h-56 flex flex-col shadow-lg bg-slate-100 rounded-lg p-5 font-google relative'>
            <textarea
                className={`w-full h-48 resize-none bg-transparent text-slate-500 focus:outline-none ${(isDisable) ? 'cursor-not-allowed' : 'cursor-text'}`}
                placeholder='Enter your text here'
                disabled={isDisable}
            ></textarea>

            {/* Bottom bar */}
            <div className='inline-flex justify-center bg-zinc-700 absolute '>
                het
            </div>

        </div>
    )
}

export default TextTranslate
