import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
function Header() {
    const nav_title = [{
        path:'/',display:'Home'
    },
    {
        path:'/plans',display:'Services'
    },
    {
        path:'/courses',display:'Courses'
    },
    {
        path:'/about',display:'About us'
    },
]
  return (
    <header className='header'>
        <div className="container">
            <div className="nav_container">
                <div className="logo">
                    <div className="logo-img">
                        <img src={logo} alt=""  />
                    </div>
                    <h2 >Hight TEch</h2>
                    <div className="navigation">
                        <ul className='menu'>

                        {
                            nav_title.map((item)=>(
                                <li className='nav-item'><Link  to={item.path}>{item.display}</Link></li>

                            ))
                        }    
                           
                           
                            

                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </header>
  )
}

export default Header
