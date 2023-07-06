import React from 'react'

const Translate = () => {
    return (
        <div className='w-full h-screen bg-slate-50 flex flex-col z-[1]'>
            <div className='w-full max-h-64 h-1/2 flex flex-col justify-start items-center bg-blue-500 p-y'>
                {/* THIS BAR OF LANG */}
                <div className='w-1/2 h-14 bg-[#316aba] flex flex-row justify-center items-center rounded-md'></div>
            </div>
        </div>
    )
}

export default Translate
