import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Drinks} from './components/Drinks'
import { Layout } from './components/Layout'
import Home from './components/Home'
import Foods from './components/Foods'
import Other from './components/Other'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/others" element={<Other />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
