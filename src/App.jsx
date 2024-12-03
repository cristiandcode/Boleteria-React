import { useState, useEffect } from 'react'
import Events from './components/Events'
import Navbar from './components/Navbar'
import './App.css'
function App() {
  
  const [searchTerm, setSearchTerm] = useState('')

  

  const handleNavbarSearch = (term) =>{
    setSearchTerm(term);
  }

  return (
    <>
       <Navbar onSearch={handleNavbarSearch}></Navbar>
      <Events searchTerm={searchTerm}></Events> 

    </>
  )
}

export default App
