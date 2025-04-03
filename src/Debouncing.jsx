import React, { useEffect, useState } from 'react'

export default function Debouncing() {
    const [value, setValue] = useState("");
    const [debouncedValue , setDebouncedValue] = useState("");

    useEffect(()=>{
        const timer = setTimeout(()=>{
                       setDebouncedValue(value);
                    },2000);
        return ()=>clearTimeout(timer);
        
    },[value]);

    const handleChange = (e) => {
            setValue(e.target.value);    
    }

  return (
    <>
        <input type="text" value={value} onChange={handleChange}/>
        <h1>Vslue:{debouncedValue}</h1>
    </>
  )
}
