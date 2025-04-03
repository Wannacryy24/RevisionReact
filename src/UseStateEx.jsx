import React, { useState } from 'react'

export default function UseStateEx() {
    const [number , setNumber] = useState(0);
    const time =  setTimeout(()=>{
        setNumber(newNumber=>newNumber+1);
    },1000)
    // time();
    clearInterval(time);
  return (
    <>
        <h1>{number}</h1>
    </>
  )
}
