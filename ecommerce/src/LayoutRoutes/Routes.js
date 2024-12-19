import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../componets/Header/Header'
import Footer from '../componets/Footer/Footer'
import Home from '../componets/Home/Home'
import Logout from '../Logout/Logout'
import ProductDetails from '../ProductDetails/ProductDetails'

function RoutesLayout() {
  return (
    <>
    <Router>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/product/:id' element={<ProductDetails/>}/>



            </Routes>
            <Footer/>
    </Router>
    </>
  )
}

export default RoutesLayout
