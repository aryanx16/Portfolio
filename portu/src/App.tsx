import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Temp from './pages/Temp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>

   <BrowserRouter >
   <Routes>
   <Route path='home' element={<Home/>} />
   <Route path='temp' element={<Temp/>} />
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
