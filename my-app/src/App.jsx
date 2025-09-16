import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'
import {  Routes, Route } from 'react-router-dom';
import SignUpPage from './components/SignUpPage'

function App() {
  const [count, setCount] = useState(0)

  return (
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    
  )
}

export default App
