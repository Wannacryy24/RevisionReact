import React, { useState, useEffect } from 'react';

export default function InputWithDebounceAndThrottle() {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [throttledValue, setThrottledValue] = useState('');

  // Debouncing: Update after 500ms of no typing
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  // Throttling: Update at most once every 1000ms
  useEffect(() => {
    const throttleTimer = setTimeout(() => {
      setThrottledValue(inputValue);
    }, 1000); // Only update once every 1000ms

    return () => clearTimeout(throttleTimer); // Cleanup the timer
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update input value instantly
  };

  return (
    <div>
      <h1>Debounce and Throttle Example</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something..." 
      />
      <div>
        <strong>Debounced Value:</strong> {debouncedValue}
      </div>
      <div>
        <strong>Throttled Value:</strong> {throttledValue}
      </div>
    </div>
  );
}
