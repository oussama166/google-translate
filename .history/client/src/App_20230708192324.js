import './App.css'
import Navbar from './Navbar/Navbar'
import Translate from './Translate/Translate'


function App() {

  return (
    <div
      className='w-full h-[100vh] flex flex-col  text-white font-bold'
    >

      <Navbar />
      <Translate />
    </div>
  )
}

export default App
