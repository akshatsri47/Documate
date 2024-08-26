import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Hero'
import { SocketProvider } from './socket/Socket'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Chat from './Pages/Chat'
import Signin from './Pages/Signin'
import Docs from './Pages/Docs'
// import './App.css'

export default function App() {
  return (
    <SocketProvider>
    <Router>
      <Routes>
        <Route path='/sigin' Component={Signin} />
        <Route path='/home' Component={Hero} />
        <Route path='/edit' Component={Docs} />
        
       <Route path='/text' Component={Chat} />

      </Routes>
    </Router>
    </SocketProvider>
   

);
 

  
}
