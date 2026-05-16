import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} /> //jab url me / aayega to home component call hoga aur home page show hoga
      <Route path='/login' element={<Login />} /> //jab url me /login aayega to login component call hoga aur login page show hoga
      <Route path='/signup' element={<SignUp />} /> //jab url me /signup aayega to signup component call hoga aur signup page show hoga
    </Routes>
    </>
  )
}

export default App