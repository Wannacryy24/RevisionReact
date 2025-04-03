import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    return count ** 2;
  }, [count]);

  const themeStyle = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };

  return (
    <div style={themeStyle}>
      <h1>Count: {count}</h1>
      <h2>Calculated: {expensiveCalculation}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
    </div>
  );
}

export default UseMemo;
