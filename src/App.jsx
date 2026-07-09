import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './components/AddStudent'
import StudentSearch from './components/StudentSearch'
import DeleteStudent from './components/DeleteStudent'
import ViewStudent from './components/ViewStudent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/'element={<AddStudent/>}/>
      <Route path='/search'element={<StudentSearch/>}/>
      <Route path='/delete'element={<DeleteStudent/>}/>
      <Route path='/view'element={<ViewStudent/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
