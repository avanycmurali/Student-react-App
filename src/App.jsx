import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './components/AddStudent'
import StudentSearch from './components/StudentSearch'
import DeleteStudent from './components/DeleteStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddStudent/>
      <StudentSearch/>
      <DeleteStudent/>
    </>
  )
}

export default App
