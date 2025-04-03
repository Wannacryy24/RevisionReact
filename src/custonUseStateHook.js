import React, { useState } from 'react'

export default function custonUseStateHook(initialValue=0) {
    const [count,setCount] = useState(initialValue);
    const inc = () => setCount(prev=>prev+1);
    const dec = () => setCount(prev=>prev-1);
    const reset = () => setCount(initialValue);
  return {count,inc,dec,reset}
}

