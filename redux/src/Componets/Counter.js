import React from 'react'
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../Redux/Reducer/Reducer'
function Counter() {
    const count  = useSelector((state)=>state.counter.value)
    const dispach = useDispatch()


  return (
    <div className='counter-container'>
     <h1 className='counter-title'>hi</h1>
<p className='counter-value'>{count}</p>
<div className='counter-buttons'>
  <button className='counter-button' onClick={()=>dispach(increment())}>increment</button>
  <button className='counter-button' onClick={()=>dispach(decrement())}>decrement</button>
</div>
    </div>
    
  )
}

export default Counter
