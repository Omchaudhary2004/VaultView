import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from '../pages/landing'
import "../pages/landing.css"
import {Routes ,Route ,BrowserRouter } from 'react-router-dom'
import Wallet_info from '../pages/wallet_section'
import Wallet from '../pages/test'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<Landing />} />
    <Route  path="/:name" element={<Wallet_info />} />
    <Route  path="/:name" element={<Wallet_info />} />
    <Route  path="/test" element={<Wallet />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
