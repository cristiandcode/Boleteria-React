import { useState, useRef } from 'react'
import Events from './components/Events'
import Navbar from './components/Navbar'
import './App.css'
function App() {
  
  const [searchTerm, setSearchTerm] = useState('')
  const containerRef = useRef();
  

  const handleNavbarSearch = (term) =>{
    console.log(containerRef.current.getterSomething(''))
    setSearchTerm(term);
  }

  return (
    <>
       <Navbar onSearch={handleNavbarSearch} ref={containerRef}></Navbar>
      <Events searchTerm={searchTerm}></Events> 

    </>
  )
}

export default App
