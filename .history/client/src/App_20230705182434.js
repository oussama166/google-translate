import React, { useEffect, useState } from 'react'


function App() {
  const [backendData, setBackendData] = useState(null)

  useEffect(() => { 
    fetch('/api')

  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App
