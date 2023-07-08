import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Translate from './Translate/Translate'


function App() {

  // To save the data fetching from backend Data

  const [backendData, setBackendData] = useState([])
  const [getTranslate, setGetTranslate] = useState(["hello world", "en", "ar"])

  // Fetch into server.js to get the translate of word

  useEffect(() => {
    fetch(`/api?text=${getTranslate[0]}&from=${getTranslate[1]}&to=${getTranslate[2]}`)
      .then(res => res.json())
      .then(data => setBackendData(prevdata =>
        [
          ...prevdata,
          data["message"],
          data["original"]
        ]
      )
      )
  }, [])

  return (
    <div
      className='w-full h-[100vh] flex flex-col  text-white font-bold'
    >
      {console.log(backendData)}
      <Navbar />
      <Translate />
    </div>
  )
}

export default App
