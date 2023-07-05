import React, { useEffect, useState } from 'react'


function App() {
  const [backendData, setBackendData] = useState(null)

  useEffect(() => { 
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data.message))
      

  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App
