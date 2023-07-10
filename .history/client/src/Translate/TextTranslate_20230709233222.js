import { useState } from 'react'
import { BiSolidVolumeFull } from "react-icons/bi"
import { MdOutlineMic } from "react-icons/md"
import { IoCloseCircle } from 'react-icons/io5'
import { HiClipboard } from 'react-icons/hi'
import 'responsivevoice'

const TextTranslate = ({ isDisable, isDone, takeText, output, translateFiled }) => {
    const [textLength, setTextLength] = useState(0)

    const handleTextLength = (e) => {
        setTextLength(e.target.value.length)
        if (textLength > 5000) {
            e.target.innerText = e.target.innerText.slice(0, 5000)
        }
    }
    const HandleKeyUp = (e) => {
        setTimeout(() => {
            if (e.target.value.length > 0 || e.target.value.length <= 5000) {
                isDone((prev) => (!prev));
                console.log("is submit from here damy");
                document.querySelector('form').requestSubmit()

                takeText(prevState => {
                    const { text: _, ...rest } = prevState; // Destructure "from" property and ignore it
                    return { ...rest, text: e.target.value || "oussama" }
                });

            }
        }, 10000)
    }

    const clearText = () => {
        setTextLength(0)
        document.querySelectorAll('textarea').forEach((ele) => ele.value = '')
    }

    //FIXME - Fixe the readText
    //SECTION - Read Text
    const readText = () => {
        responsiveVoice.speak(output, "Arabic Female", { rate: 1 });
    }
    //!SECTION - Read Text

    const copyText = () => {
        navigator.clipboard.writeText(output)
    }

    return (

        <div
            className='w-full h-64 flex flex-col shadow-lg bg-slate-100 rounded-lg p-5 font-google relative text-slate-500'>
            <textarea
                className={`w-full h-48 resize-none bg-transparent text-slate-500 focus:outline-none ${(isDisable) ? 'cursor-not-allowed' : 'cursor-text'}`}
                placeholder={(isDisable) ? 'Text to translate' : 'Translated text'}
                disabled={isDisable}
                onChange={handleTextLength}
                onKeyUp={HandleKeyUp}
                value={output}
            >
            </textarea>
            <IoCloseCircle
                size={24}
                className={`${(textLength > 0) ? 'absolute' : 'hidden'} top-5 right-5 cursor-pointer text-slate-500  hover:text-slate-700 ease-linear transition-all`}
                onClick={clearText}
            />


            {/* Bottom bar */}


            {(translateFiled == false) ? (
                <div className='w-full h-14 inline-flex items-center justify-between gap-5 bg-transparent absolute bottom-0 left-0  px-6 box-shadow-top'>

                    <div className='flex items-center gap-5'>
                        <BiSolidVolumeFull
                            size={24}
                            className='cursor-pointer text-slate-500 hover:text-slate-700 ease-linear transition-all'
                        />
                        <MdOutlineMic
                            size={24}
                            className='cursor-pointer text-slate-500 hover:text-slate-700 ease-linear transition-all'
                        />
                    </div>
                    <span>{`${textLength}/5000`}</span>
                </div>
            ) :
                (
                    <div className='w-full h-14 inline-flex items-center justify-between gap-5 bg-transparent absolute bottom-0 left-0  px-6 box-shadow-top'>

                        <div className='flex items-center gap-5'>
                            <BiSolidVolumeFull
                                size={24}
                                className='cursor-pointer text-slate-500 hover:text-slate-700 ease-linear transition-all'
                                onClick={readText}
                            />
                            <MdOutlineMic
                                size={24}
                                className='cursor-pointer text-slate-500 hover:text-slate-700 ease-linear transition-all'
                            />
                            <HiClipboard
                                size={24}
                                className='cursor-pointer text-slate-500 hover:text-slate-700 ease-linear transition-all'
                                onClick={copyText}
                            />
                        </div>


                    </div>
                )}
        </div>
    )
}

export default TextTranslate
