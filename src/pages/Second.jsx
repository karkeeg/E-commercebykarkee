import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, increamentByAmmount } from '../features/counterSlice.js'

const Second = () => {

    let data = useSelector(state => state.counter.value) 

const dispatch = useDispatch()
    console.log(data)
  return (
    <div>Second{<br></br>}

        <button onClick={()=>dispatch(increament())}>Increament</button>
        <button onClick={()=>dispatch(decreament())}>decreament</button>
        <button onClick={()=>dispatch(increamentByAmmount(5))}>Increament by ..</button>
        
    </div>

   
  )
}

export default Second