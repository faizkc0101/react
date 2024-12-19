import React,{useState} from 'react'
import './Signup.css'

function Signup() {
    const [formData,setFormData]=useState({
        fistName:'',lastName:'',email:'',password:''
    })
    const handleInputChange=(event)=>{
    const {name,value}= event.target
    setFormData((prevData)=>({...prevData,[name]:value}))
    }
    const handleSumbit =(event)=>{
        event.preventDefault()
        console.log(formData);
        
    }
  return (
    <div className='signup-card'>
      <h1>Registration form</h1>
      <form onSubmit={handleSumbit}>
        <label htmlFor=''>fisrt name</label>
        <input type='text' placeholder='fist name' name='fistName'value={formData.fistName} onChange={(event)=>handleInputChange(event)}></input>
        <label htmlFor=''>last name</label>
        <input type='text' placeholder='last name' name='lastName' value={formData.lastName} onChange={(event)=>handleInputChange(event)}></input>
        <label htmlFor=''>email</label>
        <input type='email' placeholder='email' name='email' value={formData.email} onChange={(event)=>handleInputChange(event)}></input>
        <label htmlFor=''>password</label>
        <input type='password' placeholder='password' name='password' value={formData.password} onChange={(event)=>handleInputChange(event)}></input>
        <button type='submit'>signup</button>
      </form>
    </div>
  )
}

export default Signup
