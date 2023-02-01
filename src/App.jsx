import React from 'react'
import {BrowserRoute, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netfrik from './pages/Netfrik'

function App() {
  return (
    <BrowserRoute>
    <Routes>
     <Route exact path='/login' element={<Login />}/>
     <Route exact path='/signup' element={<Signup />}/>
     <Route exact path='/netfrik' element={<Netfrik />}/>
    </Routes>
    </BrowserRoute>
  )
}

export default App
