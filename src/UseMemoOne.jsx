import React, { useMemo, useState } from 'react'

export default function UseMemoOne() {

    // The useMemo hook in React is a performance optimization tool that allows us to memoize the result of an expensive calculation, ensuring that it's only recomputed when its dependencies change. This can prevent unnecessary recalculations and improve the performance of your application.

    // Understanding useMemo

    // When a React component re-renders, all the functions inside it are re-executed. While this is generally efficient, certain operations can be computationally intensive, leading to performance bottlenecks. By wrapping such expensive calculations with useMemo, React will cache the result and return the cached value unless the specified dependencies change.

    // Here, useMemo takes two arguments:

    // A function that performs the expensive calculation and returns the result.
    // An array of dependencies that, when changed, will trigger the recalculation of the memoized value.

    
    const [value, setValue] = useState(1);
    const [theme, setTheme] = useState(false);
    
    const handleCalculationClick = useMemo(() => {
        for(var i=1; i<=10;i++){
            setValue(value*i);
        }
    },[value]);

    const changeTheme =() => {
        var home = document.body;
        setTheme(!theme);
        home.style.backgroundColor = theme ? "pink" : "green"
    }
    
  return (
    <>
        <h1> Extensive Calculation Value
            <br/>
            {
                value
            }
        </h1>
        <button onClick={handleCalculationClick}>Extensive Calculation</button>
        <button
            onClick={changeTheme}
        > Change Doc Theme</button>
    </>
  )
}
