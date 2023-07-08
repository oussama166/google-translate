import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Translate from './Translate/Translate'


function App() {


  return (
    <div
      className='w-full h-[100vh] flex flex-col  text-white font-bold'
    >
      {console.log(backendData)}
      <Navbar />
      <Translate setData={setGetTranslate} />
    </div>
  )
}

export default App
