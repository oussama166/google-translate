import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'


function App() {

  // To save the data fetching from backend Data

  // const [backendData, setBackendData] = useState([])

  // Fetch into server.js to get the translate of word

  // useEffect(() => {
  //   fetch('/api')
  //     .then(res => res.json())
  //     .then(data => setBackendData(prevdata =>
  //       [
  //         ...prevdata,
  //         data["message"],
  //         data["original"]
  //       ]
  //     )
  //     )
  // }, [])

  return (
    <div
      className='
      w-full h-[100vh] flex flex-row justify-center items-center text-white font-bold  
      bg-gardient-blue
      '
    >
      <Navbar />
    </div>
  )
}

export default App
