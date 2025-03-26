import React, { useState } from 'react'
import First from './First'
import Second from './Second'

function AboutUs() {

  
  const [user,setUser ] = useState("Bibek")
 
 
  return (
    <div>AboutUs
{user}
      <First />
    </div>
  )
}

export default AboutUs