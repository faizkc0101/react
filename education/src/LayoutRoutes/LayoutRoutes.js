import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Plans from '../components/pages/Plans/Plans'
import Courses from '../components/pages/Courses/Courses'
import AboutUs from '../components/AboutUs/AboutUs'

function LayoutRoutes() {
  return (
    <Router> 
        <Header/>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/plans' element={<Plans/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/about' element={<AboutUs/>}/>
   

  

</Routes>
<Footer/>
    </Router>
  )
}

export default LayoutRoutes
