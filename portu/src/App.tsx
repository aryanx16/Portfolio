
import './App.css'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Temp from './pages/Temp'

function App() {

  return (
    <div className=''>

   <BrowserRouter >
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/temp' element={<Temp/>} />
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
