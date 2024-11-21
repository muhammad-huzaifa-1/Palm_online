import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services'
import Portfolio from './pages/Portfolio';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ToastNotificcation from './components/ToastNotificcation';
import Profile from './pages/Profile';
const App = () => {
  return (
    <div className=' px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <Navbar/>
      <ToastNotificcation/>
      <Profile/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/ourteam' element={<OurTeam/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App