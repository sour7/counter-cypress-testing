
import './App.css'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import Users from './components/Users'

function App() {


  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Counter/>}/>
        <Route path='/users' element={ <Users/>}/>
      </Routes>
     
    </div>
  )
}

export default App
