import React from 'react'
import './Community.css'
import tc  from '../../../assets/img/tc.png'
function Community() {
    const handleClick =()=>{
        window.open('google.com','-blank')
    }

  return (
    <div className='container'>
        <div className="start-wapper">
            <div className="start-img">
                <img src={tc} alt="" srcset="" />
            </div>
            <div className="start-content">
                <h2 className='section-title'>join Our free Tech community</h2>
                <p>UNlock the  pwer kksjfakjf</p>
                <button className='register-btn' onClick={handleClick}>join now</button>
            </div>
        </div>
      
    </div>
  )
}

export default Community
