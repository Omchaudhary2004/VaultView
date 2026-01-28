import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from '../pages/landing'
import "../pages/landing.css"
import {Routes ,Route ,BrowserRouter } from 'react-router-dom'
import Wallet_info from '../pages/wallet_section'
function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<Landing />} />
    <Route  path="/Solana" element={<Wallet_info />} />
    <Route  path="/Ethereum" element={<Wallet_info />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
