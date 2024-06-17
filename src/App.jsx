import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Mypage from './components/Mypage'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Resume from './components/Resume'

function App() {
    return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Mypage/>}/>
        <Route path='/aboutme' element={<Mypage/>}/>
        {/* <Route path='/resume' element={<Resume/>}/> */}
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
     
      
      </BrowserRouter>

      {/* <Home/> */}
    </>
  )
}

export default App
