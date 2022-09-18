import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import { myContext } from './Context'
import PrivacyPolicyPage from './pages/PrivacyPolicy'

const App = () => {
  const userObject = useContext(myContext)
  console.log('app.tsx == ', userObject)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
