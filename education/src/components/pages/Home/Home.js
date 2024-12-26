import React from 'react'
import meta from '../../../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './Home.css'
import Courses from '../Courses/Courses'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'
function Home() {
    const handleClick=()=>{
        window.open('https://www.youtub.com/@techflixai','blank')
    }
  return (
    <>
  <section>
    <div className="container">
        <div className="home-container">
            <div className="home-content">
                <h2 className='section_title'>Learn Everything free!</h2>
                <p>Master Trending Techologies with high TEch  invest your time</p>
                <div className="home-btns">
                    <button onClick={handleClick} className='register-btn'>Get start</button>
                    <button  onClick={handleClick}  className='register-btn'>Watch now</button>
                </div>
            </div>
            <div className="home-img">
                <div className="home-img-wrapper">
                    <div className="box-01">
                        <div className="box-img">
                            <img src={meta} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="whatsapp-container">
                        <h5>500 + stundents</h5>
                        <AiOutlineWhatsApp color='green'/>
                    </div>
                    <div className="support">
                        <h5>active support</h5>
                    </div>
                </div>

            </div>
        </div>
    </div>

  </section>
  <Courses/>
  <Community/>
  <Plans/>
  </>
  )
}

export default Home
