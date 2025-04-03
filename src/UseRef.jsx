import React, { useRef, useState } from 'react'

export default function UseRef() {
    
    const clickCount = useRef(0);
    const elementToFocus = useRef(null);

    const handleClick = () => {
        clickCount.current = clickCount.current+1;
        console.log("Ref COunter",clickCount.current);


        // to focus on input when button clicked
        elementToFocus.current.focus();
        console.log(elementToFocus);
        
    }


  return (
    <>
        <button
            onClick={handleClick}
            >
            Click me and check console
        </button>
        <input type="text" ref={elementToFocus}/>
    </>
  )
}
