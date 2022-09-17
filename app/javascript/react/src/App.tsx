import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import Test from './pages/Test'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
