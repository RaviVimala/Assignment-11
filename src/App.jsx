import React from 'react'

 import { Routes, Route } from 'react-router-dom'
 import Navbar from './components/Navbar'
 import Home from './Pages/Home'
 import About from './Pages/About'
 import Users from './Pages/Users'
 import Userslist from './Pages/Userslist'
 


function App() {
  return (
    <>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/userslist" element={<Userslist />} />
      </Routes>

      
      
    </>
  )
}

export default App
