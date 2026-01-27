import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CollectionPage from './pages/CollectionPage.jsx'
import Navbar from './components/Navbar.jsx'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  return (
    <div className=' min-h-screen w-full bg-gray-950 text-white'>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer/>
    </div> 
  )
}



export default App
