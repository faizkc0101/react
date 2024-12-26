import React from 'react'
import './AboutUs.css'
import miya from '../../assets/img/miya.jpg'

function AboutUs() {

  return (
    <div className='container'>
        <div className="about-us-container">
            <div className="team-member">
                <h2>our team</h2>
                <div className="member-card">
                    <img src={miya} alt="" srcset="" />
                    <h3 className='member-name'>faiz</h3>
                    <p className='member-role'>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
            </div>
            <div className="about-us-desc">
                <h1 className='about-us-heading'>about us</h1>
                <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
            </div>
        </div>
      
    </div>
  )
}

export default AboutUs
