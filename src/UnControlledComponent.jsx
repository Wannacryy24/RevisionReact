import React, { useRef } from 'react'

export default function UnControlledComponent() {
    const inputRef = useRef(null);
    const handleClick = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    }
  return (
    <>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>submit</button>
    </>
  )
}
